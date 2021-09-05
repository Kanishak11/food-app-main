import React,{useEffect,useState} from 'react'
import {Carousel} from 'react-bootstrap'
import {arr} from './carouseImgData'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './Carousel.css'

const Caros = (source) => {
    return (
        <Carousel.Item className="Carousel" key= {source.img_src} interval={2000}>
          <img
            className="d-block w-100"
            
            src={source.img_src}
            alt="First slide"
            height = "300px"
          />
          <Carousel.Caption style={{height:"auto " , width:"auto"}}>
   
          </Carousel.Caption>
        </Carousel.Item>
    )
}
function Carousels() {
  const [data ,setData] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`api/customer/restaurant/${id}`).then(res =>{setData([...arr , {img_src:res?.data?.logo?.mainUrl,h3 :res?.data?.name}])}).catch(err => {console.log(err)})
  },[])
    return (
        <>
        <Carousel nextLabel="" prevLabel="">
            {data.map( (src) => Caros(src))}
        </Carousel>
        </> 
    )
    }

export default Carousels