import React from 'react';
import classNames from 'classnames';

export default function Text({children}) {
    return(
        <div className={classNames('text')}>{children}</div>
    );
}