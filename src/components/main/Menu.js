import React from 'react';
import MenuWrapper from '../../ui/MenuWrapper';
import MenuItem from '../../ui/MenuItem';

export default function Menu() {
    return(
        <MenuWrapper>
                <MenuItem>Главная</MenuItem>
                <MenuItem>Уведомления</MenuItem>
                <MenuItem>Сообщения</MenuItem>
                <MenuItem>Закладки</MenuItem>
                <MenuItem>Профиль</MenuItem>
        </MenuWrapper>
    );
}