import React from 'react';
import classNames from 'classnames';

export default function MainFeedWrapper({children}) {
    return(
        <div className={classNames('mainFeedWrapper')}>
            {children}
        </div>
    );
}