import dynamic from 'next/dynamic';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const Admin = dynamic<{}>(
  () => import('../containers/Admin/Admin').then((module) => module.Admin),
  { ssr: false, loading: () => <p>LOADING</p> },
);

const AdminPage: React.FC = () => {
  return <Admin />;
};

export default AdminPage;
