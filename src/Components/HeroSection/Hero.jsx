import React from 'react'
import './styles.css'
import sliderImage from "../../images/slider-img.jpg"
export default function Hero () {
  return (
    <div>
        {/* <section className="slider_section position-relative">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner container">
          <Slider/>
          <Slider/>
          <Slider/>
        </div>
        </div>
        <HeroFooter/>
        </section> */}
        <section className=" slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
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
          <div className="carousel-item ">
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
          <div className="carousel-item ">
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

      </div>
      <div className="container">
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
    </section>
    </div>
  )
}
