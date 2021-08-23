import React , {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch  } from 'react-router-dom'
import { addToCart } from "../../actions/CartItemAction";
import {initialMenuItem,setLoading} from "../../actions/MenuItemAction"
import Loading from './Loading';
import SearchCards from "../../components/search/SearchCards";

export default function MenuItemList() {
    const dispatch = useDispatch();
    const myMenu = useSelector((state) => state.menuItem.items);
    const loading =useSelector((state) => state.menuItem.setLoading);
    console.log('loading......' , loading )
    const {url} = useRouteMatch()
    useEffect(() => {
        const id  = url.split("/")
        dispatch(setLoading())
        dispatch(initialMenuItem(id[2]))
    }, [])

  return (<>
    {loading &&  <Loading/>}
    <div className="bodyFlex">
      {!loading && myMenu.map((items, i) => {
        return (
          <div key={i}>
            <SearchCards
              name={items.name}
              type={items.itemType}
              image={items.image.mainUrl}
              price={items.sellingPrice}
              proceed={() => {
                dispatch(
                  addToCart(items.id)
                );
              }}
            />
          </div>
        );
      })}
    </div>
    </>
  );
}
