import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardsScrolls.css";
import Cards from "./Card";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/CartItemAction";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items:  7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
  const dispatch = useDispatch();
  const myItems = useSelector((state) => state.cartReducer);
  console.log(props.data);
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
      {props.data.map((items, i) => {
        return (
          <React.Fragment key={i}>
              <Cards
                name={items.name}
                image={items.image}
                proceed={() => {
                  dispatch(
                    addToCart(myItems, {
                      itemName: items.name,
                      priceOfThisItem: 350,
                      price: 350,
                      quantity: 1,
                    })
                  );
                }}
              />

          </React.Fragment>
        );
      })}
    </Carousel>
  );
}
