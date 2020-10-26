import React from 'react';
import CreateMessage from './CreateMessage';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Menu from '../Menu';
import { useSelector } from 'react-redux';
import Message from './Message';

export default function Messages() {
    const message = useSelector(state => state.message);
    const messages = useSelector(state => state.messages);

    return(
        <>
            <Menu />
            <FlexBox
                mainBlock={true}
                position={flexPosition.center}
                direction={flexDirection.column}
            >
                <CreateMessage key={message.messageId} message={message}/>
                <FlexBox
                    feed={true}
                    direction={flexDirection.column}
                    position={flexPosition.center}
                >
                    {
                        messages.map((message) => {
                            return (
                                <Message key={message.messageId} message={message} />
                            )
                        })   
                    }
                </FlexBox>
            </FlexBox>
        </>
    )
}