import React from 'react';
import styles from '../styles/menuWrapper.css';
import Button from './Button';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function MenuWrapper({full, shrink}) {
    return (
        <div className={cx({
            fullSidebar: full,
            shrinkSidebar: shrink,
        })}>
            <ul className={cx({
                fullMenu: full,
                shrinkMenu: shrink,
            })}>
                <MenuItem>Главная</MenuItem>
                <MenuItem>Уведомления</MenuItem>
                <MenuItem>Сообщения</MenuItem>
                <MenuItem>Закладки</MenuItem>
                <MenuItem>Профиль</MenuItem>
                <MenuItem><Button mainButton={true}>Написать</Button></MenuItem>
            </ul>
        </div>
    );
}

MenuWrapper.propTypes = {
    full: PropTypes.bool,
    shrink: PropTypes.bool,
}

MenuWrapper.defaultProps = {
    full: true,
    shrink: false,
}