import React from 'react';
import Button from './Button';
import MenuItem from './MenuItem';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function MenuWrapper({full, shrink}) {
    return (
        <div className={classNames({
            fullSidebar: full,
            shrinkSidebar: shrink,
        })}>
            <ul className={classNames({
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