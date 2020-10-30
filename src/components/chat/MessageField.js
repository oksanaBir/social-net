import React from 'react';
import TextArea from '../../ui/TextArea';
import Field from '../../ui/Field'; 
import { FlexBox, flexPosition, flexDirection } from '../../ui/FlexBox';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, changeMessageText } from '../../store/actions';

export default function MessageField() {
    const message = useSelector(state => state.message);
    const {text, validation} = message;
    const dispatch = useDispatch();

    return(
        <Field> 
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
                <Button
                    disabled={validation === false}
                    onClick={() => dispatch(sendMessage())}
                >Отправить</Button>
            </FlexBox>
        </Field>
    )
}