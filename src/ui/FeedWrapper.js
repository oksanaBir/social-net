import React from 'react';
import classNames from 'classnames';

export default function FeedWrapper({children}) {
    return(
        <div className={classNames('feedWrapper')}>
            {children}
        </div>
    );
}