import 'focus-visible/dist/focus-visible.min.js';
import 'netlify-identity-widget';
import type { AppProps as NextAppProps } from 'next/app';
import '../styles/global.scss';
import { useEffect, useState } from 'react';
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
