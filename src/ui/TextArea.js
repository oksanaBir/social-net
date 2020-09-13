import React from 'react';
import classNames from 'classnames';

export default function TextArea({value, onChange}) {
    return(
        <textarea
            className={classNames('textarea')}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Написать"
            value={value}
        />
    );
}