import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions, margin } from '../ui/FlexBox';
import { CheckOutlined, CameraOutlined } from '@ant-design/icons';
import TextArea from '../ui/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { addText, addPhoto, createPost } from '../store/actions';

export default function CreatePost() {
    const post = useSelector(state => state.post);
    const {text} = post;
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
                        (value) => dispatch(addPhoto(value))
                    }
                />
                <CheckOutlined
                    style={{ margin: '5px' }}
                    onClick={
                        () => dispatch(createPost())
                    }
                />
            </FlexBox>
        </FlexBox>
    );
}