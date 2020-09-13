import React from 'react';
import classNames from 'classnames';

export default function Icon({children, onClick}) {
    return(
        <div
            className={classNames('icon')}
            onClick={onClick}
        >
            {children}
        </div>
    );
}