import React from 'react'
import client from "../../images/client.png"
import "./styles.css"

export default function Client () {
  return (
    <div>
        <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="custom_heading-container">
          <h3 className=" ">
            What clients says
          </h3>
        </div>
        <div className="layout_padding2-top">
          <div className="client_container">
            <div className="detail-box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
            <div className="client_id">
              <div className="img-box">
                <img src={client} alt=""/>
              </div>
              <div className="name">
                <h5>
                  tempor incididunt
                </h5>
                <h6>
                  Owner
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
