import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function MenuWrapper({full, hide, children}) {
    return (
        <div className={classNames({
            fullSidebar: full,
            hideSidebar: hide,
        })}>
            <ul className={classNames({
                fullMenu: full,
                hideMenu: hide,
            })}>
                {children}
            </ul>
        </div>
    );
}

MenuWrapper.propTypes = {
    full: PropTypes.bool,
    hide: PropTypes.bool,
}

MenuWrapper.defaultProps = {
    full: true,
    hide: false,
}