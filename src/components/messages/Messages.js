import React from 'react';
import CreateMessage from './CreateMessage';

export default function Messages() {
    return(
        <>
            <Menu />
            <FlexBox
                home={true}
                position={flexPosition.center}
                direction={flexDirection.column}
            >
                <CreateMessage />
            </FlexBox>
        </>
    )
}