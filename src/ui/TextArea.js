import React from 'react';
import styles from '../styles/textarea.css';

export default function TextArea() {
    return(
        <textarea
            className={styles.textarea}
            placleholder="Написать"
            style={{ left: '500px' }}
        />
    )
}