import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/molecules-style/blog-title.css'
import Tag from '../atoms/tag'
import { CalcTimeToRead, CalcDateTime } from '../../utils/LogicFunc'

const BlogTitle = props => {
    const { blog } = props

    return (
        <div className='blog-title'>
            <p className='blog-title-name'>{blog.title}</p>
            <div className='blog-list-tag'>
                {blog.categories.map((tag, index) => (
                    <Tag name={tag.name} link={tag.link || '/blog'} referrer key={index} />
                ))}
            </div>
            <div className='blog-title-time'>
                <p>{CalcDateTime(blog.createdAt)}</p>
                <span>&nbsp;-&nbsp;</span>
                <p>{CalcTimeToRead(blog.content)}</p>
            </div>
        </div>
    )
}

BlogTitle.propTypes = {
    blog: PropTypes.object
}

export default BlogTitle