import React, { useState } from 'react';
import Providers from './providers';
import { AppRoutes } from './router';
import Layout from './layout';

const App: React.FC = () => {
  return (
    <Providers>
      <Layout>
        <AppRoutes />
      </Layout>
    </Providers>
  );
};
export default App;
