import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function MainFeedWrapper({children, mainFeedWrapper, reverse}) {
    return(
        <div className={
            classNames({
                mainFeedWrapper,
                reverse
            })}>
            {children}
        </div>
    );
}

MainFeedWrapper.propTypes = {
    mainFeedWrapper: PropTypes.bool,
    reverse: PropTypes.bool,
}

MainFeedWrapper.defaultProps = {
    mainFeedWrapper: true,
    reverse: false,
}