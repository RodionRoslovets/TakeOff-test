import React from 'react';
import style from './button.module.scss'

const Button = ({ listener, children, classes='' }) => {
    return (
        <button className={`${style.button} ${classes}`} onClick={listener}>
            {children}
        </button>
    );
}

export default Button;