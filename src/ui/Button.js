import React from 'react';
import styles from '../styles/button.css';

export default function Button({children}) {
    return (
        <div className={styles.button}>
            {children}
        </div>
    );
}