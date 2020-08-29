import React from 'react';
import styles from '../styles/post.css';

export default function Post({value}) {
    return(
        <div className={styles.post}>
            {value}
        </div>
    );
}
