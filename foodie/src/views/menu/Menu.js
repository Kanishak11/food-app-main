import React ,{useEffect} from 'react'
import FooterPagePro from '../../components/footer/Footer'
import Navb from '../../components/header/Navbar'
import MenuBody from './MenuBody'
import axios from 'axios'
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
export default function Menu() {
    useEffect(() => {
        axios.put("/api/customer/cart/status", { status: "MUTABLE" }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {console.log(res)}).catch(err => {console.log(err)})
    })
 
    return (
        <div>
            <Navb cartPopUp={false} searchModal={true} menu={true} />
            <MenuBody />
            <FooterPagePro/>
        </div>
    )
}
