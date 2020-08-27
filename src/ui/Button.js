import React from 'react';
import styles from '../styles/button.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

let cx = classNames.bind(styles);

export default function Button({children, onClick, mainButton}) {
    return (
        <div
            className={cx({
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