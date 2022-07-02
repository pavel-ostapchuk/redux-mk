import React from 'react';
import UsersPage from 'entities/UsersPage';
import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/Layout';
import './styles/index.scss';
import TodosPage from 'entities/TodosPage';

const App = () => (
  <Layout>
    <Routes>
      <Route path="users_page" element={<UsersPage />} />
      <Route path="todos_page" element={<TodosPage />} />
    </Routes>
  </Layout>
);

export default App;
