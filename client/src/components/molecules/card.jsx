import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../atoms/tag'
import LinkRef from '../atoms/link-ref'
import '../../styles/molecules-style/card.css'

const Card = props => {
  const {blog} = props
  return (
    <div className='card'>
      <div className='card-content'>
        <div>
          <div className='card-time'>
            <p>{blog.createdAt.toLocaleString()}</p>
            <p>{blog.time_to_read / 60} min read</p>
          </div>
          <p className='card-title'>{blog.title}</p>
          <div className='card-tags'>
            {blog.categories.map((tag, index) => (
              <Tag name={tag.name} link={tag.link} referrer key={index}></Tag>
            ))}
          </div>
          <p className='card-description'>{blog.description}</p>
        </div>
        <LinkRef link={`blog/${blog.id}`} text="read more →" referrer/>
      </div>
    </div>
  )
}
Card.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Card