import React from 'react';
import TextArea from '../../ui/TextArea';
import {FlexBox, flexPosition, flexDirection} from '../../ui/FlexBox';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createElement, addText } from '../../store/actions';

export default function CreateMessage() {
    const elements = useSelector(state => state.element);
    const {text, validation} = message;
    const dispatch = useDispatch();

    return(
        <>
            <FlexBox
                direction={flexDirection.column}
                createField={true}
                position={flexPosition.end}
            > 
                <TextArea
                    value={text}
                    validation={validation}
                    onChange={
                        (value) => dispatch(addText(value))
                    }
                />
                <FlexBox
                >
                    <Button
                        disabled={validation === false}
                        onClick={() => dispatch(createElement())}
                    >Отправить</Button>
                </FlexBox>
            </FlexBox>
        </>
    )
}