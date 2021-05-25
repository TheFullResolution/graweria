import React from 'react';
import { useMount } from 'react-use';
import { SignupPage } from '../containers/SignupPage/SignupPage';
import { siteData } from '../data/siteData';

const Signup: React.FC = () => {
  useMount(() => {
    import('../utils/netlifyAuth').then((mod) => mod.netlifyAuth.initialize());
  });
  return <SignupPage siteData={siteData} />;
};

export default Signup;
