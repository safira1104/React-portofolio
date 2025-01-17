import React from 'react'
import { testimonials } from '../common/data/dummydata'
import {FormatQuote} from "@mui/icons-material"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <><div className="testimonials hero">
      <div className="container">
      <Slider {...settings}>
          {testimonials.map((val) =>(
            <div className="box">
              <i>
                <FormatQuote />
              </i>
                <p>{val.text}</p>
                <div className="img">
                  <img src={val.image} alt="" />
                </div>
                <h3>{val.name}</h3>
                <label>{val.post}</label>
            </div>
          ))}
          </Slider>
      </div>  
    </div></>
  )
}
