import React  ,{useState ,useEffect}  from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardsScrolls.css";
import Cards from "./Card";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart } from "../../actions/CartItemAction";
import { useParams } from "react-router";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items:  6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function CardsGsap(props) {
  const {id} = useParams()
  const [foodItem ,setFoodItem] = useState([])
  useEffect(() => {
    const promise =  axios.get(`https://food-app-timesinternet.herokuapp.com/api/customer/restaurant/${id}/item`)
    promise.then((response) =>{
      const data = response.data
      setFoodItem(data)
    }).catch((error) =>console.error(error))
  },[])
  const dispatch = useDispatch();

  return (
    <Carousel
      additionalTransfrom={60}
      autoPlaySpeed={3000}
      centerMode={true}
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
        {foodItem.map((items, i) => {
          return (
            <React.Fragment key={i}>
                <Cards
                  name={items.name}
                  image={items.image.mainUrl}
                  price = {items.sellingPrice}
                  proceed={() => {
                    dispatch(addToCart(items.id))
                  }}
                />

            </React.Fragment>
          );
        })}
    </Carousel>
  );
}
