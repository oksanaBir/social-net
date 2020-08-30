import React from 'react';
import styles from '../styles/menu.css';
import Button from './Button';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function Menu({full, shrink}) {
    return (
        <div className={cx({
            fullSidebar: full,
            shrinkSidebar: shrink,
        })}>
            <ul className={cx({
                fullMenu: full,
                shrinkMenu: shrink,
            })}>
                <li className={styles.menuItem}>Главная</li>
                <li className={styles.menuItem}>Уведомления</li>
                <li className={styles.menuItem}>Сообщения</li>
                <li className={styles.menuItem}>Закладки</li>
                <li className={styles.menuItem}>Профиль</li>
                <li className={styles.mainMenuItem}><Button mainButton={true}>Написать</Button></li>
            </ul>
        </div>
    );
}

Menu.propTypes = {
    full: PropTypes.bool,
    shrink: PropTypes.bool,
}

Menu.defaultProps = {
    full: true,
    shrink: false,
}