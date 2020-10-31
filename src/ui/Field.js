import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Field({children, field, reverse}) {
    return(
        <div
            className={classNames({
                field,
                reverse,
            })}
        >
            {children}
        </div>
    );
}

Field.propTypes = {
    field: PropTypes.bool,
    reverse: PropTypes.bool,
}

Field.defaultProps = {
    field: true,
    reverse: false,
}