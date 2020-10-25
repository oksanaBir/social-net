import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function TextArea({value, textarea, onChange, validation}) {
    return(
        <textarea
            className={classNames({
                textarea,
                danger: !validation
            })}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Написать"
            value={value}
        />
    );
}

TextArea.propTypes = {
    textarea: PropTypes.bool,
    danger: PropTypes.bool,
}

TextArea.defaultProps = {
    textarea: true,
    danger: false,
}