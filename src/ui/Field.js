import React from 'react';
import classNames from 'classnames';

export default function Field({
    children,
    height=0
}) {
    return(
        <div
            className={classNames('field')}
            style={{ height: height + '%'}}
        >
            {children}
        </div>
    );
}