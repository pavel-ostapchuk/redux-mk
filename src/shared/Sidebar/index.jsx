import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarConfig } from './SidebarConfig';
import style from './index.module.scss';

export const SidebarMenu = () => (
  <div className={style.sidebar_wrapper}>
    <ul className={style.sidebar_menu}>
      {sidebarConfig.map((pageLink) => (
        <Link key={pageLink.id} className={style.sidebar_menu_item__link} to={pageLink.path}>
          <li className={style.sidebar_menu_item}>{pageLink.name}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default SidebarMenu;
