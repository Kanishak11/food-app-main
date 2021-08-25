import React ,{useEffect} from 'react'
import FooterPagePro from '../../components/footer/Footer'
import { Message } from 'semantic-ui-react'
import Navb from '../../components/header/Navbar'
import OrderBody from './OrderBody'
import { useSelector } from 'react-redux'
import axios from 'axios'
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}


export default function Order() {
    const orderPlaced = useSelector(state => state.orderAddressDetails.placed)
    const orderFailed = useSelector(state => state.orderAddressDetails.failed)

    useEffect(() => {
        axios.put("/api/customer/cart/status", { status: "IMMUTABLE" }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {console.log(res)}).catch(err => {console.log(err)})
    })
    return (
        <>
            <Navb  / >
            {orderPlaced && <Message> ORDER_PLACED SUCCESSFULLY</Message> }
            {orderFailed && <Message> ORDER FAILED</Message> }

            <OrderBody/>
            <FooterPagePro/>
        </>
    )
}
