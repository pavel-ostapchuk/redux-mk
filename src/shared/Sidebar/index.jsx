import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarConfig } from './SidebarConfig';
import style from './index.module.scss';

const Sidebar = () => (
  <div className={style.sidebar_wrapper}>
    <ul className={style.sidebar_list}>
      {SidebarConfig.map(({ id, name, path }) => (
        <Link key={id} to={path} className={style.sidebar_list__item_link}>
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  </div>
);
export default Sidebar;
