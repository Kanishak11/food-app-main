import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SideNav = () => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      fluid
      icon='labeled'
      inverted
      vertical
      visible
      width='wide'
    >
      <Menu.Item as='a' center>
        North Indian
      </Menu.Item>
      <Menu.Item as='a'>
        <p>South Indian</p>

      </Menu.Item>
      <Menu.Item as='a'>
        Chinese
      </Menu.Item>
    </Sidebar>
  </Sidebar.Pushable>
)

export default SideNav