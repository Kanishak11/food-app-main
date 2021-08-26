import React from 'react'
import Navb from '../../components/header/Navbar'
import FooterPagePro from '../../components/footer/Footer'
import MyordersBody from './MyordersBody'

export default function Myorders() {
    return (
        <div>
           <Navb cartPopUp={false} searchModal={false} menu={false} />
            <MyordersBody/>
            <FooterPagePro/>
        </div>
    )
}
