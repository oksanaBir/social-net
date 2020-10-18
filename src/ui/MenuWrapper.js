import React from 'react';
import MenuItem from './MenuItem';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function MenuWrapper({full, hide}) {
    return (
        <div className={classNames({
            fullSidebar: full,
            hideSidebar: hide,
        })}>
            <ul className={classNames({
                fullMenu: full,
                hideMenu: hide,
            })}>
                <MenuItem>Главная</MenuItem>
                <MenuItem>Уведомления</MenuItem>
                <MenuItem>Сообщения</MenuItem>
                <MenuItem>Закладки</MenuItem>
                <MenuItem>Профиль</MenuItem>
            </ul>
        </div>
    );
}

MenuWrapper.propTypes = {
    full: PropTypes.bool,
    hide: PropTypes.bool,
}

MenuWrapper.defaultProps = {
    full: true,
    hide: false,
}