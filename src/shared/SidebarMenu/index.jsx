import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarMenuConfig } from './SidebarMenuConfig';
import style from './index.module.scss';

const SidebarMenu = () => (
  <div className={style.sidebar_wrapper}>
    <ul className={style.sidebar_menu}>
      {SidebarMenuConfig.map((menuItem) => (
        <Link key={menuItem.id} to={menuItem.path} className={style.menu_item_link}>
          <li className={style.menu_item_name}>{menuItem.name}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default SidebarMenu;
