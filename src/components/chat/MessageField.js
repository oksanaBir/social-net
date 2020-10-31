import React from 'react';
import TextArea from '../../ui/TextArea';
import Field from '../../ui/Field'; 
import { FlexBox, flexPosition } from '../../ui/FlexBox';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, changeMessageText } from '../../store/actions';
import { CheckOutlined } from '@ant-design/icons';
import Icon from '../../ui/Icon';

export default function MessageField() {
    const message = useSelector(state => state.message);
    const {text, validation} = message;
    const dispatch = useDispatch();

    return(
        <Field reverse={true}> 
            <TextArea
                value={text}
                validation={validation}
                onChange={
                    (value) => dispatch(changeMessageText(value))
                }
            />
            <FlexBox
                margin={15}
                position={flexPosition.end}
            >
                <Icon
                    disabled={validation === false}
                    onClick={
                        () => dispatch(sendMessage())
                    }
                >
                    <CheckOutlined/>
                </Icon>
            </FlexBox>
        </Field>
    )
}