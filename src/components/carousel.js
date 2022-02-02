import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'

const StoriesCarousel = (props) => {
    const {children} = props

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                    <div className="carousel-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesCarousel