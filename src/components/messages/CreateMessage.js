import React from 'react';
import TextArea from '../../ui/TextArea';
import {FlexBox, flexPosition, flexDirection} from '../../ui/FlexBox';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';

export default function CreateMessage() {
    return(
        <>
            <FlexBox
                direction={flexDirection.column}
                createField={true}
                position={flexPosition.end}
            > 
                <TextArea height={30} />
                <FlexBox
                >
                    <Button>Отправить</Button>
                </FlexBox>
            </FlexBox>
        </>
    )
}