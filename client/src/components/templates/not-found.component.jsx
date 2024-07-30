import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/template-style/not-found.component.css'
import LinkRef from '../atoms/link-ref'

const NotFound = props => {
  const { isBlog } = props
  return (
    <div className='not-found-container'>
      <div className='not-found'>
        <h1>
          404
        </h1>
        <span>hehehe</span>
        <p>{isBlog ? "Comming soon ..." : "Page Not Found"}</p>
        <LinkRef text='Go back home' link='/' referrer/>
      </div>
    </div>
  )
}

NotFound.propTypes = {
  isBlog: PropTypes.bool
}

export default NotFound