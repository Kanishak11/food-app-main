import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CardsScroll from '../CardsScroll';
export default function TrendingDrinks() {
    const [drinks , setDrinks] = useState([{}])
    useEffect(async () => {   
    const data = await axios.get("https://api.punkapi.com/v2/beers").then( (response) => {
            const arr =  response.data
            const dataArr = arr.map((items) => ({name : items.name , image : items.image_url}))
            setDrinks(dataArr)
         }).catch(function (error) {
            console.error(error);
        });
        },[])

    return (
        <div>
            {
            <CardsScroll data = {drinks} />
            }
        </div>
    )
}
