import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import Post from './Post';
import CreatePost from './CreatePost';
import "../styles/styles.less";
import { FlexBox, margin, left } from '../ui/FlexBox';
import { useSelector } from 'react-redux';

export default function App() {
    const post = useSelector(state => state.post);
    const posts = useSelector(state => state.posts);

    return (
        <>
            <MenuWrapper />
            <FlexBox left={300} margin={50}>
                <CreatePost key={post.postId} post={post}/>
                <FlexBox>
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