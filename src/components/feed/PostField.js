import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Field from '../../ui/Field';
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
        <Field>
            <TextArea
                value={text}
                validation={validation}
                onChange={
                    (value) => dispatch(changePostText(value))
                }
            />
            <FlexBox
                margin={15}
                position={flexPosition.end}
            >
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
        </Field>
    );
}