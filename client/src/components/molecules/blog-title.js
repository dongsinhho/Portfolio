import React from 'react'
import PropTypes from 'prop-types'

import './blog-title.css'
import Tag from '../atoms/tag'

const BlogTitle = props => {
    const { blog } = props
    return (
        <div className='blog-title'>
            <p className='blog-title-name'>This is the third post of my new Astro blog.</p>
            <div className='blog-list-tag'>
                <Tag name='tag' />
                <Tag name='tag' />
                <Tag name='tag' />
            </div>
            <div className='blog-title-time'>
                <p>ádadasdsad</p>
                <span>&nbsp;-&nbsp;</span>
                <p>ádadasdsad</p>
            </div>
        </div>
    )
}

BlogTitle.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogTitle