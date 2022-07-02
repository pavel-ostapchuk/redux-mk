import TodosPage from 'enitites/TodosPage';
import UsersPage from 'enitites/UsersPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/Layout';
import './styles/index.scss';

const App = () => (
  <Layout>
    <Routes>
      <Route path="users_page" element={<UsersPage />} />
      <Route path="todos_page" element={<TodosPage />} />
    </Routes>
  </Layout>
);

export default App;
