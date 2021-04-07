import 'focus-visible/dist/focus-visible.min.js';
import type { AppProps as NextAppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/global.scss';
import { netlifyAuth } from '../utils/netlifyAuth';

function MyApp({ Component, pageProps }: NextAppProps) {
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
    });
  }, [loggedIn]);
  return <Component {...pageProps} />;
}

export default MyApp;
