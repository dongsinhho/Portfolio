import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/atoms-style/tag.css'

const Tag = (props) => {
    const { name, link } = props;
    // Nếu không có link, fallback về '/blog'
    const safeLink = link || '/blog';
    return (
        <Link className='tag' to={safeLink}>
            <span>
                #{name}
            </span>
        </Link>
    );
}


Tag.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Tag