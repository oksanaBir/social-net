import React from 'react';
import Content from '../ui/Content';
import Menu from '../ui/Menu';
import { connect } from 'react-redux';

export default function App() {
    return (
        <Content>
            <Menu />           
        </Content>
    );
}