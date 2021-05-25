import dynamic from 'next/dynamic';
import React from 'react';
import { useMount } from 'react-use';
import { Loader } from '../components/Loader/Loader';

// eslint-disable-next-line @typescript-eslint/ban-types
const Admin = dynamic<{}>(
  () => import('../containers/Admin/Admin').then((module) => module.Admin),
  // eslint-disable-next-line react/display-name
  { ssr: false, loading: () => <Loader /> },
);

const AdminPage: React.FC = () => {
  useMount(() => {
    import('../utils/netlifyAuth').then((mod) => mod.netlifyAuth.initialize());
  });
  return <Admin />;
};

export default AdminPage;
