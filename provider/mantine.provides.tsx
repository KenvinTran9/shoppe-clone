// pages/_app.tsx
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
