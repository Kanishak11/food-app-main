import axios from "axios";
import { useEffect, useState } from "react";
import { CardGroup, Spinner } from "react-bootstrap";
import Order from "./Order";

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
const PastOrders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pastOrders, setPastOrders] = useState([])


    useEffect(() => {
        axios.get("api/customer/order", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then(resp => {
            
            const pastOrders = resp.data.filter(order => {
                return order.status === "COMPLETED" || order.status === "DECLINED"
            })
            setPastOrders(pastOrders)
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
                <h1>PastOrders</h1>
                <CardGroup style={{ justifyContent: "center" }}>
                {
                    pastOrders.map((order, index) => {
                        return <Order order={order} key={index}></Order>
                    })
                }
                </CardGroup>
            </div>
        )
    }
    
}

export default PastOrders

