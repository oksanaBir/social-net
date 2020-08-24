import React from 'react';
import styles from '../styles/button.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Button({children, onClick}) {
    return (
        <div
            className={cx({
                button: true,
                mainButton: false
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
}