import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Icon({children, onClick, icon, disabled}) {
    return(
        <button
            className={classNames({
                icon,
                disabled,
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Icon.propTypes = {
    icon: PropTypes.bool,
    disabled: PropTypes.bool,
}

Icon.defaultProps = {
    icon: true,
    disabled: false,
}