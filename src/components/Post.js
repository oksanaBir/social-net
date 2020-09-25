import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions } from '../ui/FlexBox';
import Text from '../ui/Text';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import PostWrapper from '../ui/PostWrapper';

export default function Post({ text, onLikeClick, onShareClick }) {
    return(
        <PostWrapper postWrapper={true}>
            <Text>{ text }</Text>
            <FlexBox direction={flexDirection.row}>
                <HeartOutlined
                    style={{ margin: '5px' }}
                    onClick={onLikeClick}
                />
                <ShareAltOutlined
                    style={{ margin: '5px' }}
                    onClick={onShareClick}
                />
            </FlexBox>
        </PostWrapper>
    );
}