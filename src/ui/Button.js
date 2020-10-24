import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({children, onClick}) {
    return (
        <div
            className={classNames('button')}
            onClick={onClick}
        >
            {children}
        </div>
    );
}