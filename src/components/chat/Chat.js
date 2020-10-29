import React from 'react';
import MessageField from './MessageField';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Menu from '../Menu';
import FeedWrapper from '../../ui/FeedWrapper';
import { useSelector } from 'react-redux';
import Message from './Message';

export default function Messages() {
    const message = useSelector(state => state.message);
    const messages = useSelector(state => state.messages);

    return(
        <>
            <Menu />
            <FeedWrapper>
                <MessageField key={message.id} message={message} />
                <FlexBox
                    direction={flexDirection.column}
                    position={flexPosition.center}
                >
                    {
                        messages.map((message) => {
                            return (
                                <Message key={message.id} message={message} />
                            )
                        })   
                    }
                </FlexBox>
            </FeedWrapper>
        </>
    )
}