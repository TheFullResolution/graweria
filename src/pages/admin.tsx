import dynamic from 'next/dynamic';
import React from 'react';
import { Loader } from '../components/Loader/Loader';

const Admin = dynamic<{}>(
  () => import('../containers/Admin/Admin').then((module) => module.Admin),
  // eslint-disable-next-line react/display-name
  { ssr: false, loading: () => <Loader /> },
);

const AdminPage: React.FC = () => {
  return <Admin />;
};

export default AdminPage;
