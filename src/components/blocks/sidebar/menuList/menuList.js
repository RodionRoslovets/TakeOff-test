import React from 'react';

import MenuListItem from './menuListItem/menuListItem';

const MenuList = ({classes=''}) => {
    return (
        <ul className={classes}>
            <MenuListItem to='/'><i className="far fa-file-alt"></i>Опросы</MenuListItem>
            <MenuListItem to='/users'><i className="fas fa-users"></i>Пользователи</MenuListItem>
            <MenuListItem to='/blackLists'><i className="far fa-flag"></i>Черные списки</MenuListItem>
            <MenuListItem to='/callCenter'><i className="fas fa-phone-alt"></i>Колл-центр</MenuListItem>
        </ul>
    )
}

export default MenuList;