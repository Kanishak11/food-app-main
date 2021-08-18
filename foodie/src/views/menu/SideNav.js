import React , {useEffect ,useState} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import axios from 'axios'

import Loaders from '../../components/loader/Loaders'

const SideNav = () => {
  const [items,setItems] = useState([{}])
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    const menuCategory = axios.get('/api/customer/restaurant/4/category')
    menuCategory.then((res) => {
      setItems(res.data)
      setLoading(false)
    }).catch((err)=> console.log(error))
  },[])
  return  (
  <Sidebar.Pushable>
    {loading && <Loaders/>}
    <Sidebar
      as={Menu}
      fluid
      icon='labeled'
      inverted
      vertical
      visible
      width='wide'
    >
      {items.map( (vals) => (<Menu.Item as='a' center>
       {vals.name}
      </Menu.Item>))}

    </Sidebar>
  </Sidebar.Pushable>
  )}

export default SideNav