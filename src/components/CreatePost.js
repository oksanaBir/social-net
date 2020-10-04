import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions, margin } from '../ui/FlexBox';
import { CheckOutlined, CameraOutlined } from '@ant-design/icons';
import TextArea from '../ui/TextArea';
import { useDispatch, useSelector } from 'react-redux';

export default function CreatePost({ }) {
    const post = useSelector(state => state.post);
    const {postId, text} = post;
    const dispatch = useDispatch();

    return(
        <FlexBox direction={flexDirection.column}>
            <TextArea
                value={text}
                onChange={
                    (value) => dispatch(addText(value))
                }
            />
            <FlexBox margin={15} position={flexPositions.end}>
                <CameraOutlined
                    style={{ margin: '5px' }}
                    onClick={
                        (value) => dispatch(addPhoto(postId, value))
                    }
                />
                <CheckOutlined
                    style={{ margin: '5px' }}
                    onClick={
                        (postId) => dispatch(createPost(postId))
                    }
                />
            </FlexBox>
        </FlexBox>
    );
}