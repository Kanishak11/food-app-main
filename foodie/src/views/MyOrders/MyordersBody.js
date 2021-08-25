import React from 'react'
import PastOrders from './PastOrders'
import PresentOrders from './PresentOrders'

export default function MyordersBody() {
    return (
        <div>
            <PresentOrders/>
            <PastOrders/>

        </div>
    )
}
