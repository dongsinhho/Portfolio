import React from 'react'
import '../../styles/template-style/not-found.component.css'
import LinkRef from '../atoms/link-ref'

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <div className='not-found'>
        <h1>
          404
        </h1>
        <span>hehehe</span>
        <p>Page Not Found</p>
        <LinkRef text='Go back home' link='/' referrer/>
      </div>
    </div>
  )
}

export default NotFound