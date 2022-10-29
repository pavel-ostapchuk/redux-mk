import SidebarMenu from 'shared/SidebarMenu';
import style from './index.module.scss';

const Layout = ({ children }) => (
  <div className={style.layout_wrapper}>
    <SidebarMenu />
    <div className={style.layout_content}>{children}</div>
  </div>
);
export default Layout;
