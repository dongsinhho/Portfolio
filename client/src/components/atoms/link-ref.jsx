import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/atoms-style/link-ref.css'
import { Link } from 'react-router-dom';

const LinkRef = props => {
    const { text, link, referrer } = props;
    const displayText = text || link;
    return (
        referrer ?
        <Link className='link' to={link}>{displayText}</Link>
        :
        <a className='link' href={link} target='_blank' rel='noreferrer'>
            {displayText}
        </a>
    )
}

LinkRef.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string,
    referrer: PropTypes.bool.isRequired,
}


export default LinkRef