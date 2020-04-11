import React from 'react';

import MenuListItem from './menuListItem/menuListItem';

const MenuList = ({classes=''}) => {
    return (
        <ul className={classes}>
            <MenuListItem text='Параметры' to='/main/parameters'></MenuListItem>
            <MenuListItem text='Вопросы' to='/main/questions'></MenuListItem>
            <MenuListItem text='Логика' to='/main/logic'></MenuListItem>
            <MenuListItem text='Условия' to='/main/conditions'></MenuListItem>
            <MenuListItem text='Респонденты' to='/'></MenuListItem>
        </ul>
    )
}

export default MenuList;