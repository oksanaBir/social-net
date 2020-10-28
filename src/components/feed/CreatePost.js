import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import { CheckOutlined, CameraOutlined } from '@ant-design/icons';
import TextArea from '../../ui/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { changePostText, changePostPhoto, publishPost } from '../../store/actions';
import Icon from '../../ui/Icon';

export default function CreatePost() {
    const post = useSelector(state => state.post);
    const {text, validation} = post;
    const dispatch = useDispatch();

    return(
        <FlexBox
            createField={true}
            direction={flexDirection.column}
            createPost={true}
            position={flexPosition.end}
        >
            <TextArea
                value={text}
                validation={validation}
                onChange={
                    (value) => dispatch(changePostText(value))

                }
            />
            <FlexBox margin={15}>
                <Icon
                    onClick={
                        (value) => dispatch(changePostPhoto(value))
                    }
                > 
                    <CameraOutlined/>
                </Icon>
                <Icon
                    disabled={validation === false}
                    onClick={
                        () => dispatch(publishPost())
                    }
                >
                    <CheckOutlined/>
                </Icon>
            </FlexBox>
        </FlexBox>
    );
}