import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Field from '../../ui/Field';
import { CheckOutlined, CameraOutlined } from '@ant-design/icons';
import TextArea from '../../ui/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { changePostText, changePostPhoto, publishPost } from '../../store/actions';
import { Button } from 'antd';

export default function CreatePost() {
    const post = useSelector(state => state.post);
    const {text, validation} = post;
    const dispatch = useDispatch();

    return(
        <Field height={25}>
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
                <Button
                    icon={<CameraOutlined />}
                    onClick={
                        (value) => dispatch(changePostPhoto(value))
                    }
                    style={{
                        border: 'none',
                        margin: '5px',
                        backgroundColor: 'transparent'
                    }}
                />
                <Button
                    icon={<CheckOutlined />}
                    disabled={validation === false}
                    onClick={
                        () => dispatch(publishPost())
                    }
                    style={{
                        border: 'none',
                        margin: '5px',
                        backgroundColor: 'transparent'
                    }}
                />
            </FlexBox>
        </Field>
    );
}