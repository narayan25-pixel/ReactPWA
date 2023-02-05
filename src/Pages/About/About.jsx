import React from 'react'
import aboutImage from "../../images/about-img.jpg"
import "./styles.css"

export default function About() {
  return (
    <div>
      <section className="about_section layout_padding">
      <div className="container">
        <div className="custom_heading-container">
          <h3 className=" ">
            ABOUT OUR COMPANY
          </h3>
        </div>
        <p className="layout_padding2-top">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <div className="img-box layout_padding2">
          <img src={aboutImage} alt=""/>
        </div>
        <p className="layout_padding2-bottom">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
      <div className="container">
        <div className="btn-box">
          <a href="/">
            Read More
          </a>
          <hr/>
        </div>
      </div>
    </section>
    </div>
  )
}
