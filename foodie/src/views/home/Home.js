import React from 'react'
import Carousels from '../../components/carousel/Carousel'
import FooterPagePro from '../../components/footer/Footer'
import Navb from '../../components/header/Navbar'
import './Home.css'
import CardsScroll from '../../components/card/CardsScroll'
import Search from '../../components/search/Search'
import CartMain from '../../components/cart/CartMain'
import DisplaySearchItems from '../../components/displaysearchitems/DisplaySearchItems'
import CardHeading from '../../components/card/CardHeading'
import HeadingText from '../../components/textEffect/HeadingText'
export default function Home() {
  return (
    <div>
      <Navb/>
      <Carousels/>
      <DisplaySearchItems/>
      <CardHeading/>
      <CardsScroll/>
      <br/>
      <CartMain/>
      <FooterPagePro/>
    </div>
  )
}
