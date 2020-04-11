import React from 'react';
import MenuList from './menuList/menuList'
import style from './sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <MenuList></MenuList>
        </div>
    );
}

export default Sidebar;