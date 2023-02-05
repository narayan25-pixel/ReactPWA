import React from 'react'
import serviceImageOne from "../../images/s-1.jpg"
import serviceImageTwo from "../../images/s-2.jpg"
import serviceImageThree from "../../images/s-3.jpg"
import serviceImageFour from "../../images/s-4.jpg"
import "./styles.css"

export default function Services() {
  return (
    <div>
        <section class="service_section layout_padding-bottom">
      <div class="container">
        <div class="custom_heading-container">
          <h3 class=" ">
            OUR SERVICES
          </h3>
        </div>
        <p class="">
          ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <div class="service_container ">
          <div class="row">
            <div class="col-md-3">
              <div class="box b-1">
                <div class="img-box">
                  <img src={serviceImageOne} alt=""/>
                </div>
                <div class="detail-box">
                  <h6>
                    Tab Services
                  </h6>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                  <div class="btn-box">
                    <a href="/">
                      Read More
                    </a>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="box b-2">
                <div class="img-box">
                  <img src={serviceImageTwo} alt=""/>
                </div>
                <div class="detail-box">
                  <h6>
                    Pipe Water
                  </h6>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                  <div class="btn-box">
                    <a href="/">
                      Read More
                    </a>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="box b-3">
                <div class="img-box">
                  <img src={serviceImageThree} alt=""/>
                </div>
                <div class="detail-box">
                  <h6>
                    Washing Machine
                  </h6>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                  <div class="btn-box">
                    <a href="/">
                      Read More
                    </a>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="box b-4">
                <div class="img-box">
                  <img src={serviceImageFour} alt=""/>
                </div>
                <div class="detail-box">
                  <h6>
                    Hand Washing
                  </h6>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt
                  </p>
                  <div class="btn-box">
                    <a href="/">
                      Read More
                    </a>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
