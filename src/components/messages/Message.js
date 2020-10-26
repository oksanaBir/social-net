import React from 'react';
import { FlexBox, flexDirection, flexPosition } from '../../ui/FlexBox';
import Text from '../../ui/Text';
import ElementWrapper from '../../ui/ElementWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { changeElement } from '../../store/actions';

export default function Message() {
    return(
        <ElementWrapper>
            { text }
        </ElementWrapper>
    )
}