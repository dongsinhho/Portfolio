import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/atoms-style/link-ref.css'
import { Link } from 'react-router-dom';

const LinkRef = props => {
    const { text, link, referrer, target, rel, className, ...rest } = props;
    const displayText = text || link;
    if (referrer) {
        return <Link className={className || 'link'} to={link} {...rest}>{displayText}</Link>;
    }
    return (
        <a
            className={className || 'link'}
            href={link}
            target={target || '_blank'}
            rel={rel || 'noopener noreferrer'}
            {...rest}
        >
            {displayText}
        </a>
    );
}

LinkRef.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string,
    referrer: PropTypes.bool,
    target: PropTypes.string,
    rel: PropTypes.string,
    className: PropTypes.string,
}

export default LinkRef