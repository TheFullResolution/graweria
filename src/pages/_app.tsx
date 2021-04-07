import 'focus-visible/dist/focus-visible.min.js';
import type { AppProps as NextAppProps } from 'next/app';
import '../styles/global.scss';
import { useAsync } from 'react-use';

function MyApp({ Component, pageProps }: NextAppProps) {
  useAsync(async () => {
    await import('netlify-identity-widget');
  });
  return <Component {...pageProps} />;
}

export default MyApp;
