import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import TextArea from '../ui/TextArea';
import Icon from '../ui/Icon';
import PostWrapper from '../ui/PostWrapper';
import { FlexBox, flexPositions, flexDirection } from '../ui/FlexBox';
import "../styles/styles.less";

export default function App() {
    return (
        <>
            <MenuWrapper />
            <TextArea style={{ left: '500px' }}/>
            <PostWrapper>
                <FlexBox direction={flexDirection.row}>
                    <Icon>i</Icon>
                    <Icon>T</Icon>
                </FlexBox>
            </PostWrapper>
        </>
    );
}
