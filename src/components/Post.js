import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions } from '../ui/FlexBox';
import Text from '../ui/Text';
import { HeartOutlined, ShareAltOutlined, CloseOutlined } from '@ant-design/icons';
import PostWrapper from '../ui/PostWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, sharePost, deletePost } from '../store/actions';

export default function Post() {
    const post = useSelector(state => state.post);
    const {text, likes, share, postId} = post;
    const dispatch = useDispatch();

    return(
        <PostWrapper postWrapper={true}>
            <Text value={text} />
            <FlexBox direction={flexDirection.row} margin={15}>
                <HeartOutlined
                    style={{ margin: '5px' }}
                    onClick={
                        () => (likePost(postId))
                    }
                />
                <Text value={likes}>{ likes }</Text>
                <ShareAltOutlined
                    style={{ margin: '5px' }}
                    onClick={
                        () => dispatch(sharePost(postId))
                    }
                />
                <Text value={share}>{ share }</Text>
                <CloseOutlined
                    style={{ margin: '5px' }}
                    onClick={deletePost} 
                />
            </FlexBox>
        </PostWrapper>
    );
}