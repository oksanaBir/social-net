import React from 'react';
import classNames from 'classnames';

export default function MessageWrapper({children}) {
    return(
        <div className={classNames('messageWrapper')}>
            {children}
        </div>
    );
}