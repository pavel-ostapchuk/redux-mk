import { Link } from 'react-router-dom';
import { SidebarConfig } from './SidebarConfig';
import style from './index.module.scss';

const Sidebar = () => (
  <div className={style.sidebar_wrapper}>
    <ul className={style.sidebar__list}>
      {SidebarConfig.map(({ id, path, name }) => (
        <Link key={id} to={path} className={style.sidebar__list_item_link}>
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  </div>
);
export default Sidebar;
