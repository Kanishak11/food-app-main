import React from 'react'
import { Image, Loader, Segment } from 'semantic-ui-react'

const Loaders = () => (
  <Segment inverted>
    <Loader active inverted />

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default Loaders