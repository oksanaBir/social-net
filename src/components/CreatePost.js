import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions } from '../ui/FlexBox';
import { CheckOutlined } from '@ant-design/icons';
import TextArea from '../ui/TextArea';

export default function CreatePost({ text }) {
    return(
        <FlexBox direction={flexDirection.column}>
            <TextArea />
            <CheckOutlined />
        </FlexBox>
    );
}