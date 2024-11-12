import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/molecules-style/blog-title.css'
import Tag from '../atoms/tag'

const BlogTitle = props => {
    const { blog } = props
    return (
        <div className='blog-title'>
            <p className='blog-title-name'>{blog.title}</p>
            <div className='blog-list-tag'>
                {blog.categories.map((tag, index) => (
                    <Tag name={tag.name} referrer key={index} />
                ))}
            </div>
            <div className='blog-title-time'>
                <p>{blog.createdAt.toLocaleString()}</p>
                <span>&nbsp;-&nbsp;</span>
                <p>{blog.time_to_read / 60} min read</p>
            </div>
        </div>
    )
}

BlogTitle.propTypes = {
    blog: PropTypes.object
}

export default BlogTitle