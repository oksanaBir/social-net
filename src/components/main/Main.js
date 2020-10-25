import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import { useSelector } from 'react-redux';
import Menu from '../Menu';

export default function Main() {
    const post = useSelector(state => state.post);
    const posts = useSelector(state => state.posts);

    return (
        <>
            <Menu />
            <FlexBox
                mainBlock={true}
                position={flexPosition.center}
                direction={flexDirection.column}
            >
                <CreatePost key={post.postId} post={post}/>
                <FlexBox
                    feed={true}
                    direction={flexDirection.column}
                    position={flexPosition.center}
                >
                    {
                        posts.map((post) => {
                            return (
                                <Post key={post.postId} post={post} />
                            )
                        })   
                    }
                </FlexBox>
            </FlexBox>
        </>
    );
}