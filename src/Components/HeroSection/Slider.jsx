import React from 'react'
import "./styles.css"
import sliderImage from "../../images/slider-img.jpg"

export default function Slider() {
  return (
    <div>
        <div className="carousel-item active">
            <div className="slider_item-box layout_padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <div>
                        <img src={sliderImage} alt="" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div>
                        <h1>
                          Maintenance { }
                          <span>
                            Service
                          </span>
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
