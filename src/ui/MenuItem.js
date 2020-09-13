import React from 'react';
import classNames from 'classnames';

export default function MenuItem({children, onClick}) {
    return(
        <li
            className={classNames('menuItem')}
            onClick={onClick}
        >
            {children}
        </li>
    );
}