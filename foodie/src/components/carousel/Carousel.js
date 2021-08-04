import React from 'react'
import {Carousel} from 'react-bootstrap'
import {arr} from './carouseImgData'

const Caros = (source) => {
    return (
        <Carousel.Item  key= {source.img_src} interval={2000}>
          <img
            className="d-block w-100"
            src={source.img_src}
            alt="First slide"
            height = "400px"
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
        <Carousel >
            {arr.map( (src) => Caros(src))}
        </Carousel>
        </> 
    )
    }

export default Carousels