import React from 'react';
import Post from './Post';
import PostField from './PostField';
import FeedWrapper from '../../ui/FeedWrapper';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import { useSelector } from 'react-redux';
import Menu from '../Menu';

export default function Feed() {
    const post = useSelector(state => state.post);
    const posts = useSelector(state => state.posts);

    return (
        <>
            <Menu />
            <FeedWrapper>
                <PostField key={post.id} post={post} />
                <FlexBox
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
            </FeedWrapper>
        </>
    );
}