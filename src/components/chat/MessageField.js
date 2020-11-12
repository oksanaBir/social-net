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
        <Field reverse={true}> 
            <TextArea
                height = {80}
                value={text}
                validation={validation}
                onChange={
                    (value) => dispatch(changeMessageText(value))
                }
            />
            <FlexBox
                position={flexPosition.end}
            >
                <Button
                    disabled={validation === false}
                    onClick={
                        () => dispatch(sendMessage())
                    }
                    style={{
                        border: 'none',
                        padding: '10px',
                        margin: '5px',
                        borderRadius: '15px',
                        color: '#43D694',
                        backgroundColor: '#f7f7f7',
                    }}
                >Отправить</Button>
            </FlexBox>
        </Field>
    )
}