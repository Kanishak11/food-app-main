import React from 'react'
import {Carousel} from 'react-bootstrap'
import {arr} from './carouseImgData'

import './Carousel.css'

const Caros = (source) => {
    return (
        <Carousel.Item className="Carousel" key= {source.img_src} interval={2000}>
          <img
            className="d-block w-100"
            src={source.img_src}
            alt="First slide"
            height = "450px"
          />
          <Carousel.Caption>
            <h3>{source.h3}</h3>
            
            <p>{source.info}</p>
          </Carousel.Caption>
        </Carousel.Item>
    )
}
function Carousels() {
    return (
        <>
        <Carousel nextLabel="" prevLabel="">
            {arr.map( (src) => Caros(src))}
        </Carousel>
        </> 
    )
    }

export default Carousels