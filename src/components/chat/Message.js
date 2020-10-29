import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Text from '../../ui/Text';
import MessageWrapper from '../../ui/MessageWrapper';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, changeMessageText } from '../../store/actions';

export default function Message({message}) {
    const {text} = message;

    return(
        <MessageWrapper>
            <Text margin={17}>{ text }</Text>
            <FlexBox direction={flexDirection.row} margin={15}>
                <EditOutlined
                    style={{ margin: '5px 0 5px 0' }}             
                />
            </FlexBox>
        </MessageWrapper>
    )
}