import 'focus-visible/dist/focus-visible.min.js';
import type { AppProps as NextAppProps } from 'next/app';
import { useMount } from 'react-use';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: NextAppProps) {
  useMount(() => {
    import('../utils/netlifyAuth').then((mod) => mod.netlifyAuth.initialize());
  });
  return <Component {...pageProps} />;
}

export default MyApp;
