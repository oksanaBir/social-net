import React from 'react';
import classNames from 'classnames';

export default function Text({children, margin = 0}) {
    return(
        <div
            className={classNames('text')}
            style={{ margin: margin + 'px' }}
        >{children}</div>
    );
}