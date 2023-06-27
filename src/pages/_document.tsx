// The _document.tsx file is responsible for rendering the initial HTML for each page of your Next.js application.
// This file is executed on the server-side, and it generates the HTML that will be sent to the browser when a user visits a page.
// For example, if you want to add metadata to your pages such as a title tag or description, you can do that in the _document.tsx file.
// It is also used to define the basic structure of your page, such as the head and body tags.
// The _document.tsx file is only executed once per page, so it's a good place to put code that you want to run only once when a page loads.

import theme from '@/theme';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="overlays" /> {/* for modal dialogs */}
      </body>
    </Html>
  );
}
