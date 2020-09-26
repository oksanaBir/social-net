import React from 'react';
import classNames from 'classnames';

export const flexPositions = {
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
    position = flexPositions.start,
    direction = flexDirection.row,
    left = 0,
    margin = 0,
}) {
    return(
        <div
            className={classNames('flexbox')}
            style={{
                justifyContent: position,
                flexDirection: direction,
                margin: margin + 'px',
                paddingLeft: left + 'px'
            }}
        >
            {children}
        </div>
    );
}