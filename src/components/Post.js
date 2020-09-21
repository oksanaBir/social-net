import React from 'react';
import classNames from 'classnames';
import { FlexBox, flexDirection, flexPositions } from '../ui/FlexBox';
import Text from '../ui/Text';
import Icon from '../ui/Icon';

export default function Post({ children }) {
    return(
        <div className={classNames('postWrapper')}>
            <FlexBox direction={flexDirection.column}>
                <Text>{ children }</Text>
                <Icon>i</Icon>
                <Icon>T</Icon>
            </FlexBox>
        </div>
    );
}