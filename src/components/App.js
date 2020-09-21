import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import TextArea from '../ui/TextArea';
import Post from './Post';
import { FlexBox, flexPositions, flexDirection } from '../ui/FlexBox';
import "../styles/styles.less";

export default function App() {
    return (
        <>
            <MenuWrapper />
            <TextArea style={{ left: '500px' }}/>
            <Post />
        </>
    );
}
