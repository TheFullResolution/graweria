import netlifyIdentity from 'netlify-identity-widget';

type Callback = (user?: netlifyIdentity.User | null) => void;

interface NetlifyAuthWindow extends Window {
  netlifyIdentity: undefined | typeof netlifyIdentity;
}

declare let window: NetlifyAuthWindow;

interface NetlifyAuth {
  isAuthenticated: boolean;
  user: null | netlifyIdentity.User;
  initialize: (callback: Callback) => void;
  authenticate: (callback: Callback) => void;
  signout: (callback: Callback) => void;
}

export const netlifyAuth: NetlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on('init', (user) => {
      callback(user);
    });
    netlifyIdentity.init();
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user) => {
      this.user = user;
      callback(user);
      netlifyIdentity.close();
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  },
};
