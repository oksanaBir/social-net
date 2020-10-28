import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Text from '../../ui/Text';
import MessageWrapper from '../../ui/MessageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, changeMessageText } from '../../store/actions';

export default function Message() {
    const {text, id} = message;
    const dispatch = useDispatch();

    return(
        <MessageWrapper>
            { text }
        </MessageWrapper>
    )
}