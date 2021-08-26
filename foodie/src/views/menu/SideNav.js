import React, { useEffect, useState } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Loaders from "../../components/loader/Loaders";
import { getMenuById ,initialMenuItem } from "../../actions/MenuItemAction";

const SideNav = () => {
  const dispatch = useDispatch();
  
  const { path, url } = useRouteMatch();
  const id = url.split("/");
  const [items, setItems] = useState([{}]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const menuCategory = axios.get(
      `/api/customer/restaurant/${id[2]}/category`
    )
    menuCategory
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <Sidebar.Pushable style={{minHeight:"100vh" , minWidth :"100px" , left : "0px" ,marginLeft :"0px"}}>
      <Sidebar
        as={Menu}
        fluid
        icon="labeled"
        inverted
        vertical
        visible
        
        >
        {loading && <Loaders />}
        <Menu.Item
            as="a"
            onClick={() => {dispatch(initialMenuItem(id[2]))}}
            center
          >
            ALL
          </Menu.Item>
        {items.map((values, i) => (
          <Menu.Item
            key={i}
            as="a"
            onClick={() => {dispatch(getMenuById(values.id))}}
            center
          >
            {values.name}
          </Menu.Item>
        ))}
      </Sidebar>
    </Sidebar.Pushable>
    </>
  );
};

export default SideNav;
