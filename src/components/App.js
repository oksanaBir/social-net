import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import TextArea from '../ui/TextArea';
import "../styles/mainStyles.css";
import Icon from '../ui/Icon';
import Menu from '../ui/Menu';
import "../styles/styles.less";

export default function App() {
    return (
        <>
            <TextArea style={{ left: '500px' }}/>
            <MenuWrapper />
            <Icon>i</Icon>
            <Icon>T</Icon>
        </>
    );
}
