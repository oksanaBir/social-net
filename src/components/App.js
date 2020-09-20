import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import TextArea from '../ui/TextArea';
import Icon from '../ui/Icon';
import Title from '../ui/Title';
import PostWrapper from '../ui/PostWrapper';
import { FlexBox, flexPositions, flexDirection } from '../ui/FlexBox';
import "../styles/styles.less";

export default function App() {
    return (
        <>
            <MenuWrapper />
            <TextArea style={{ left: '500px' }}/>
            <PostWrapper>
                <FlexBox direction={flexDirection.column}>
                    <Title>Заголовок</Title>
                    <Icon>i</Icon>
                    <Icon>T</Icon>
                </FlexBox>
            </PostWrapper>
        </>
    );
}
