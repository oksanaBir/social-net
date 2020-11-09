import React from 'react';
import classNames from 'classnames';

export default function Text({children, margin = 0}) {
    return(
        <>
            {
                children.split('\n').map((str, key) => 
                    <p
                        key={key}
                        className={classNames('text')}
                        style={{ margin: margin + 'px' }}
                    >
                        {str}
                    </p>
                )
            }
        </>
    );
}