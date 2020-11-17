import React from 'react';
import Post from './Post';
import PostField from './PostField';
import MainFeedWrapper from '../../ui/MainFeedWrapper';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import { useSelector } from 'react-redux';

export default function Feed() {
    const post = useSelector(state => state.post);
    const posts = useSelector(state => state.posts);

    return (
        <MainFeedWrapper>
            <PostField key={post.id} post={post} />
            <FlexBox
                width={'100%'}
                direction={flexDirection.column}
                position={flexPosition.center}
            >
                {
                    posts.map((post) => {
                        return (
                            <Post key={post.id} post={post} />
                        )
                    })
                }
            </FlexBox>
        </MainFeedWrapper>
    );
}