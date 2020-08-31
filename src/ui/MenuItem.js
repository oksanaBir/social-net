import React from 'react';
import styles from '../styles/menuItem.css';

export default function MenuItem({children, onClick}) {
    return(
        <li
            className={styles.menuItem}
            onClick={onClick}
        >
            {children}
        </li>
    );
}