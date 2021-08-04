import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CardsScrolls.css';
import Cards from './Card' 
import { useDispatch , useSelector} from 'react-redux'
import  {addToCart} from '../../actions/CartItemActions'

const food_items = ['Masala Chai' , 'Chhole Bhature' , 'rolls' , 'Samosa'  ,'Kulche' , 'panner Tikka' ,'Panjiri' ,'Pan' ,'Pathrode' ,'Jalebi']

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function CardsGsap() {
    const dispatch = useDispatch();
    const myItems = useSelector( state => state.cartReducer)
    return (
    <Carousel
    additionalTransfrom={60}
    autoPlaySpeed={3000}
    centerMode={false}
    className="containers"
    containerClass="containers"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={responsive}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
    {food_items.map((items , i ) => {
                return <Cards name={items} key= {i}   proceed = { () => {dispatch(addToCart(myItems,{itemName: items ,priceOfThisItem : 350 , price :350 , quantity : 1}))}} />
            })}
        </Carousel>
    )
}
