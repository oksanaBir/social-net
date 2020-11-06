import React from 'react';
import "../styles/styles.less";
import Feed from './feed/Feed';
import Chat from './chat/Chat';
import Menu from './Menu';

export default function App() {
    return (
        <>
            <Menu />
            <Feed />
        </>
    );
}