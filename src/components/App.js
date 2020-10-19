import React from 'react';
import MenuWrapper from '../ui/MenuWrapper';
import Post from './Post';
import CreatePost from './CreatePost';
import "../styles/styles.less";
import { FlexBox, margin, left, flexbox, home } from '../ui/FlexBox';
import { useSelector } from 'react-redux';
import Menu from './Menu';

export default function App() {
    const post = useSelector(state => state.post);
    const posts = useSelector(state => state.posts);

    return (
        <>
            <Menu />
            <FlexBox home={true}>
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