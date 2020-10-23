import React from 'react';
import TextArea from '../../ui/TextArea';
import {FlexBox} from '../../ui/FlexBox';

export default function Message() {
    return(
        <>
            <FlexBox home={true}>
                <TextArea />
            </FlexBox>
        </>
    )
}