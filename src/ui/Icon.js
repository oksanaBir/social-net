import React from 'react';
import styles from '../styles/icon.css';

export default function Icon({children, onClick}) {
    return(
        <div
            className={styles.icon}
            onClick={onClick}
        >
            {children}
        </div>
    );
}