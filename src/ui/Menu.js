import React from 'react';
import styles from '../styles/menu.css';
import Button from './Button';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Menu() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>Главная</li>
                <li className={styles.menuItem}>Уведомления</li>
                <li className={styles.menuItem}>Сообщения</li>
                <li className={styles.menuItem}>Закладки</li>
                <li className={styles.menuItem}>Профиль</li>
                <li><Button>Написать</Button></li>
            </ul>
        </div>
    )
}