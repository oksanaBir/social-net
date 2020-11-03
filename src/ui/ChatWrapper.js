import React from 'react';
import classNames from 'classnames';

export default function ChatWrapper({children}) {
    return(
        <div className={classNames('chatWrapper')}>
            {children}
        </div>
    );
}