import React from 'react';

import { NavLink } from 'react-router-dom';

const MenuListItem = ({ text, to }) => {
    return (
        <li>
            <NavLink to={to} activeClassName="active">
                {text}
            </NavLink>
        </li>
    );
}

export default MenuListItem;