import React from 'react';
import classNames from 'classnames';

export default function Title({children}) {
    return(
        <div className={classNames('title')}>{children}</div>
    );
}