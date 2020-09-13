import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({children, onClick, mainButton}) {
    return (
        <div
            className={classNames({
                button: true,
                mainButton,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

Button.propTypes = {
    mainButton: PropTypes.bool,
}

Button.defaultProps = {
    mainButton: false,
}