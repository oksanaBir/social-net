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
    home,
    createPost,
    newsLine
}) {
    return(
        <div
            className={classNames({
                flexbox,
                home,
                createPost,
                newsLine,
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
    home: PropTypes.bool,
    createPost: PropTypes.bool,
    newsLine: PropTypes.bool,
}

FlexBox.defaultProps = {
    flexbox: true,
    home: false,
    createPost: false,
    newsLine: false,
}