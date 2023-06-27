// This is the root component for your Next.js application. It acts as a wrapper for all your page components,
// and it provides a way to share data, styles, and logic across all your pages.
// For example, you can use the _app.tsx file to define a global header that should be displayed on every page of your site.
// You can also use it to initialize state that you want to make available throughout your application.
// The _app.tsx file is only rendered on the client-side, so any code you put inside it will only run in the browser.

import Appbar from '@/components/appbar';
import createEmotionCache from '@/emotionCache';
import { persistor, store } from '@/store';
import theme from '@/theme';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { Container, CssBaseline } from '@mui/material';
import { Session } from 'next-auth/core/types';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
              <title>COOKBOOK</title>
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
        remove the margins of all browsers and apply the material design background color */}
              <CssBaseline />
              <Appbar />
              <Container>
                <Component {...pageProps} />
              </Container>
            </ThemeProvider>
          </CacheProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
