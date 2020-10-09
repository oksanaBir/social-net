import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions } from '../ui/FlexBox';
import Text from '../ui/Text';
import { HeartOutlined, ShareAltOutlined, CloseOutlined } from '@ant-design/icons';
import PostWrapper from '../ui/PostWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, sharePost, deletePost } from '../store/actions';

export default function Post({post}) {
    const {text, likes, share, postId} = post;
    const dispatch = useDispatch();

    return(
        <PostWrapper postWrapper={true}>
            <Text> {text}</Text>
            <FlexBox direction={flexDirection.row} margin={15}>
                <HeartOutlined
                    style={{ margin: '5px' }}
                    value={likes}
                    onClick={
                        () => dispatch(likePost(postId, likes + 1))
                    }
                />
                <Text>{ likes }</Text>
                <ShareAltOutlined
                    style={{ margin: '5px' }}
                    value={share}
                    onClick={
                        () => dispatch(sharePost(postId, share + 1))
                    }
                />
                <Text value={share}>{ share }</Text>
                <CloseOutlined
                    style={{ margin: '5px' }}
                    onClick={
                        () => dispatch(deletePost(postId))
                    } 
                />
            </FlexBox>
        </PostWrapper>
    );
}