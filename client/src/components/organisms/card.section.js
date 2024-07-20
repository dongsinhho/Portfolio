import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/organisms-style/card.section.css'
import Card from '../molecules/card'

const CardSection = props => {
    const { blogData } = props
    return (
        blogData == null ?
            <p>No data available</p>
            :
            <div className='card-section'>
                {blogData.slice(0,3).map((blog, index) => (
                    <Card blog={blog} key={index}/>
                ))}
            </div>
    )
}

CardSection.propTypes = {
    blogData: PropTypes.array
}

export default CardSection
