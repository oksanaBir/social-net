import React from 'react';
import TextArea from '../../ui/TextArea';
import Field from '../../ui/Field'; 
import { FlexBox, flexPosition } from '../../ui/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, changeMessageText } from '../../store/actions';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function MessageField() {
    const message = useSelector(state => state.message);
    const {text, validation} = message;
    const dispatch = useDispatch();

    return(
        <Field> 
            <TextArea
                value={text}
                message={true}
                validation={validation}
                onChange={
                    (value) => dispatch(changeMessageText(value))
                }
            />
            <FlexBox
                position={flexPosition.end}
            >
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
    )
}