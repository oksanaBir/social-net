import React from 'react';
import classNames from 'classnames';

export const flexPosition = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
}

export const flexDirection = {
    row: 'row',
    column: 'column',
}

export function FlexBox({
    children,
    position = flexPosition.start,
    direction = flexDirection.row,
    left = 0,
    margin = 0,
    width = 'auto'
}) {
    return(
        <div
            className={classNames('flexbox')}
            style={{
                justifyContent: position,
                alignItems: position,
                flexDirection: direction,
                margin: margin + 'px',
                paddingLeft: left + 'px',
                width: width,
            }}
        >
            {children}
        </div>
    );
}