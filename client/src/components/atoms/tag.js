import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './tag.css'

const Tag = (props) => {
    const { name, link } = props;
    return (
        <Link className='tag' to={link}>
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