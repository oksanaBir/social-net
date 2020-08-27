import React from 'react';
import styles from '../styles/textarea.css';

export default function TextArea({value, onChange}) {
    return(
        <textarea
            className={styles.textarea}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Написать"
            value={value}
        />
    );
}