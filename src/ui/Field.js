import React from 'react';
import classNames from 'classnames';

export default function Field({children}) {
    return(
        <div className={classNames('field')}>
            {children}
        </div>
    );
}