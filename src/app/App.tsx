import React, { useState } from 'react';
import Providers from './providers';
import { AppRoutes } from './router';
import Layout from './layout';
import WithNavigationScroll from './WithNavigationScroll';

const App: React.FC = () => {
  return (
    <Providers>
      <Layout>
        <WithNavigationScroll />
        <AppRoutes />
      </Layout>
    </Providers>
  );
};
export default App;
