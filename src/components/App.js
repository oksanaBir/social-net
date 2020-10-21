import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import "../styles/styles.less";
import { FlexBox, flexDirection, flexPosition } from '../ui/FlexBox';
import { useSelector } from 'react-redux';
import Menu from './Menu';

export default function App() {
    const post = useSelector(state => state.post);
    const posts = useSelector(state => state.posts);

    return (
        <>
            <Menu />
            <FlexBox
                home={true}
                position={flexPosition.center}
                direction={flexDirection.column}
            >
                <CreatePost key={post.postId} post={post}/>
                <FlexBox
                    newsLine={true}
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