import React from 'react';
import MessageField from './MessageField';
import ChatWrapper from  '../../ui/ChatWrapper';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import MainFeedWrapper from '../../ui/MainFeedWrapper';
import { useSelector } from 'react-redux';
import Message from './Message';

export default function Messages() {
    const message = useSelector(state => state.message);
    const messages = useSelector(state => state.messages);

    return (
        <MainFeedWrapper reverse={true}>
            <MessageField key={message.id} message={message} />
            <ChatWrapper>
                {
                    messages.map((message) => {
                        return (
                            <Message key={message.id} message={message} />
                        )
                    })   
                }
            </ChatWrapper>
        </MainFeedWrapper>
    )
}