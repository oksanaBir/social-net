import React from 'react';
import styles from '../styles/menu.css';

export default function Menu() {
    return (
        <ul className={styles.menu}>
            <li className={styles.menuItems}>Главная</li>
            <li className={styles.menuItems}>Уведомления</li>
            <li className={styles.menuItems}>Сообщения</li>
            <li className={styles.menuItems}>Закладки</li>
            <li className={styles.menuItems}>Профиль</li>
        </ul>
    )
}