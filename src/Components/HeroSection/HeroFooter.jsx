import React from 'react'
import './styles.css'

export default function HeroFooter() {
  return (
    <div>
        <div className="container p-5">
        <div className="slider_nav-box">
          <div className="btn-box">
            <a href="/">
              Read More
            </a>
            <hr/>
          </div>
          <div className="custom_carousel-control">
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
