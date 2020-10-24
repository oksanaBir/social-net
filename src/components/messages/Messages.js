import React from 'react';
import CreateMessage from './CreateMessage';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Menu from '../Menu';

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