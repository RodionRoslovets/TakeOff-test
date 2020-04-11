import React from 'react';

import { NavLink } from 'react-router-dom';

const MenuListItem = ({ children, to }) => {
    return (
        <li>
            <NavLink to={to} activeClassName="active">
                {children}
            </NavLink>
        </li>
    );
}

export default MenuListItem;