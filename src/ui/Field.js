import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Field({children, field, message}) {
    return(
        <div
            className={classNames({field, message})}
        >
            {children}
        </div>
    );
}

Field.propTypes = {
    field: PropTypes.bool,
    message: PropTypes.bool,
}

Field.defaultProps = {
    field: true,
    message: false,
}