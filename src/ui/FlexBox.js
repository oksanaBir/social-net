import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
    flexbox,
    mainBlock,
    createField,
    feed
}) {
    return(
        <div
            className={classNames({
                flexbox,
                mainBlock,
                createField,
                feed,
            })}
            style={{
                justifyContent: position,
                alignItems: position,
                flexDirection: direction,
                margin: margin + 'px',
                paddingLeft: left + 'px'
            }}
        >
            {children}
        </div>
    );
}

FlexBox.propTypes = {
    flexbox: PropTypes.bool,
    mainBlock: PropTypes.bool,
    createField: PropTypes.bool,
    feed: PropTypes.bool,
}

FlexBox.defaultProps = {
    flexbox: true,
    mainBlock: false,
    createField: false,
    feed: false,
}