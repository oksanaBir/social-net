import React from 'react';
import styles from '../styles/menuItem.css';

export default function MenuItem({children}) {
    return(
        <li className={styles.menuItem}>{children}</li>
    );
}