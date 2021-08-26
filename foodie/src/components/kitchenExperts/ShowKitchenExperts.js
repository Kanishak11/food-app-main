import React from 'react'
import KitchenExperts from './KitchenExperts'
import './ShowKitchenExperts.css'
import CardHeading from '../card/CardHeading'
export default function ShowKitchenExperts() {
    return (
        <>
      <CardHeading data ={['Our Kitchen Experts']}/>
        <div className="experts">
            <div className="expertsCard"> <KitchenExperts name="Aaron Sanders" Description="Aaron Sanders is a Multi Cuisine Chef" image="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" /></div>
            <div className="expertsCard"> <KitchenExperts name="Daniel" image="https://images.unsplash.com/photo-1602777778160-73bbd50ab756?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" Description="Amir favours cooking with Middle Eastern flavours." /></div>
            <div className="expertsCard"> <KitchenExperts name="Amir Manoly" image="https://images.unsplash.com/photo-1470114755716-3e1124c6c3bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80" Description="Specialization in every Chinese cuisine"/></div>
        </div>
        </>
    )
}
