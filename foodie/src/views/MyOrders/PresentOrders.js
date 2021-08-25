import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup, Spinner } from "react-bootstrap"
import Order from "./Order"


let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
const PresentOrders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [presentOrders, setPresentOrders] = useState([])


    useEffect(() => {
        axios.get("api/customer/order" , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(resp => {
            console.log(resp.data)
            let presentOrders = resp.data.filter(order => {
                return order.status !== "COMPLETED" && order.status !== "DECLINED"
            })
            setPresentOrders(presentOrders)
            setIsLoading(false)
        })
    }, [])



    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <div>
                <h1>PresentOrders</h1>
                <CardGroup style={{ justifyContent: "center" }}>
    
                    {
                        presentOrders.map((order, index) => {
                            return <Order  order={order} key={index} showStatusDropdown={false} showSave={false}></Order>
                        })
                    }
                </CardGroup>
            </div>
        )
    }
    
}

export default PresentOrders