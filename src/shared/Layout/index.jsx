import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'shared/Header';
import SidebarMenu from 'shared/Sidebar';
import style from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/users_page');
    }
  }, [navigate, pathname]);

  return (
    <div className={style.main_layout}>
      <SidebarMenu />
      <div className={style.content_wrapper}>
        <Header />
        <section className={style.section_wrapper}>{children}</section>
      </div>
    </div>
  );
};
export default Layout;
