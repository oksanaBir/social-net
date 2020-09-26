import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions } from '../ui/FlexBox';
import Text from '../ui/Text';
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import PostWrapper from '../ui/PostWrapper';

export default function Post({ text, likePost, sharePost }) {
    return(
        <PostWrapper postWrapper={true}>
            <Text>{ text }</Text>
            <FlexBox direction={flexDirection.row} margin={15}>
                <HeartOutlined
                    style={{ margin: '5px' }}
                    onClick={likePost}
                />
                <ShareAltOutlined
                    style={{ margin: '5px' }}
                    onClick={sharePost}
                />
            </FlexBox>
        </PostWrapper>
    );
}