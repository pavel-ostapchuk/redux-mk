import Header from '../Header';
import Sidebar from '../Sidebar';
import style from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={style.main_layout}>
      <Sidebar />
      <div className={style.content_wrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
