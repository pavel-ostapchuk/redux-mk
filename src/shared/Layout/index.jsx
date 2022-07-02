import React from 'react';
import Header from 'shared/Header';
import SidebarMenu from 'shared/SidebarMenu';
import style from './index.module.scss';

const Layout = (props) => {
  const { children } = props;
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
