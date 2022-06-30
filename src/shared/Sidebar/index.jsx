import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarConfig } from './SidebarConfig';
import style from './index.module.scss';

export const Sidebar = () => (
  <div className={style.sidebar_wrapper}>
    {sidebarConfig.map((pageLink) => (
      <Link key={pageLink.id} to={pageLink.path}>
        {pageLink.name}
      </Link>
    ))}
  </div>
);

export default Sidebar;
