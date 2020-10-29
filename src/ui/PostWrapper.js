import React from 'react';
import classNames from 'classnames';

export default function PostWrapper({children}) {
    return(
        <div className={classNames('postWrapper')}>
            {children}
        </div>
    );
}