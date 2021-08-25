import React ,{useRef} from "react";
import Carousels from "../../components/carousel/Carousel";
import FooterPagePro from "../../components/footer/Footer";
import Navb from "../../components/header/Navbar";
import "./Home.css";
import CardsScroll from "../../components/card/CardsScroll";
import Search from "../../components/search/Search";
import CartMain from "../../components/cart/CartMain";
import DisplaySearchItems from "../../components/displaysearchitems/DisplaySearchItems";
import CardHeading from "../../components/card/CardHeading";
import HeadingText from "../../components/textEffect/HeadingText";
import TrendingDrinks from "../../components/card/drinkCards/TrendingDrinks";
import Testimonicals from "../../components/testimonicals/Testimonicals";
import KitchenExperts from "../../components/kitchenExperts/KitchenExperts";
import ShowKitchenExperts from "../../components/kitchenExperts/ShowKitchenExperts";
import Coupons from "../../components/cardForCoupons/Coupons";
import axios from "axios";

const food_items = [
  { name: "Masala Chai" },
  { name: "Chhole Bhature" },
  { name: "rolls" },
  { name: "Samosa" },
  { name: "Kulche" },
  { name: "panner Tikka" },
  { name: "Panjiri" },
  { name: "Pan" },
  { name: "Pathrode" },
  { name: "Jalebi" },
];
export default function Home() {
  return (
    <>

    <div>
      <Navb />
      <Carousels />
      <CardHeading data ={['Coupons']}/>
      <div className="couponFlex">
        <Coupons/>
      </div>
      <CardHeading data ={['trending food']}/>
      <CardsScroll data={food_items} />
      <br />
      <CardHeading data ={['Our Kitchen Experts']}/>
      <ShowKitchenExperts />
      <Testimonicals />
      <br />
      <FooterPagePro />
    </div>

    </>
  );
}
