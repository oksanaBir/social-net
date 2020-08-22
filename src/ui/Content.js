import React from 'react';
import styles from '../styles/content.css';

export default function Content({children}) {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
}