import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import { CheckOutlined, CameraOutlined } from '@ant-design/icons';
import TextArea from '../../ui/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { addText, addPhoto, createPost } from '../../store/actions';
import Icon from '../../ui/Icon';

export default function CreatePost() {
    const post = useSelector(state => state.post);
    const {text, validation} = post;
    const dispatch = useDispatch();

    return(
        <FlexBox
            direction={flexDirection.column}
            createPost={true}
            position={flexPosition.end}
        >
            <TextArea
                value={text}
                validation={validation}
                onChange={
                    (value) => dispatch(addText(value))

                }
            />
            <FlexBox margin={15}>
                <Icon
                    onClick={
                        (value) => dispatch(addPhoto(value))
                    }
                > 
                    <CameraOutlined/>
                </Icon>
                <Icon
                    disabled={validation === false}
                    onClick={
                        () => dispatch(createPost())
                    }
                >
                    <CheckOutlined/>
                </Icon>
            </FlexBox>
        </FlexBox>
    );
}