import React from 'react';
import GoodsPage from 'entities/GoodsPage';
import UsersPage from 'entities/UsersPage';
import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/Layout';

const App = () => (
  <Layout>
    <Routes>
      <Route path="users" element={<UsersPage />} />
      <Route path="goods" element={<GoodsPage />} />
    </Routes>
  </Layout>
);

export default App;
