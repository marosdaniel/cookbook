/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    exampleEnvKey: 'EXAMPLE_ENV_KEY',
  },
};

export default nextConfig;

// {process.env.exampleEnvKey}
