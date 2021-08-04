import React from 'react'
import {connect} from 'react-redux'
import './Show.css'
function Show(itemList) {
    return (
        <div className="show">
        {itemList.itemList.searchItemList.map((itms) => {
             return <li key = {itms}> {itms} </li>
         })
        }
        </div>
    )
}

const matchStateToProps = (state) => ({
    itemList : state.searchItem 
})
export default connect(matchStateToProps)(Show)