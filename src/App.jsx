import { Route, Routes } from 'react-router-dom';
import Layout from './shared/Layout';
import UsersPage from './entities/UsersPage';
import './styles/index.scss';

const App = () => (
  <Layout>
    <Routes>
      <Route path="users_page" element={<UsersPage />} />
    </Routes>
  </Layout>
);

export default App;
