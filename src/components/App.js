import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import TextArea from '../ui/TextArea';
import Post from './Post';
import CreatePost from './CreatePost';
import "../styles/styles.less";
import { FlexBox, margin, left } from '../ui/FlexBox';

export default function App() {
    return (
        <>
            <MenuWrapper />
            <FlexBox left={300} margin={50}>
                <CreatePost />
                <Post/>
            </FlexBox>
        </>
    );
}
