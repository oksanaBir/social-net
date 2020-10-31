import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({children, onClick, disabled, button}) {
    return (
        <div
            className={classNames({
                button,
                disabled,
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </div>
    );
}

Button.propTypes = {
    button: PropTypes.bool,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    button: true,
    disabled: false,
}