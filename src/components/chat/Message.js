import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Text from '../../ui/Text';
import MessageWrapper from '../../ui/MessageWrapper';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteMessage, changeMessageText } from '../../store/actions';

export default function Message({message}) {
    const {text, id} = message;
    const dispatch = useDispatch();

    return(
        <MessageWrapper>
            <FlexBox position={flexPosition.end}>
                {/* <EditOutlined
                    style={{ margin: '15px 15px 0 0' }}             
                />
                <CloseOutlined
                    style={{ margin: '15px 15px 0 0' }}
                    onClick={
                        () => dispatch(deleteMessage(id))
                    }
                /> */}
            </FlexBox>
            <Text margin={17}>{ text }</Text>
        </MessageWrapper>
    )
}