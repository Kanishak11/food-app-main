import React, { Component  } from 'react'
import { Accordion, Button, Icon } from 'semantic-ui-react'
import SelectPaymentType from './SelectPaymentType'
import ShowAddress from './ShowAddress'
import AddAdress from './AddAdress'
import MapPopUp from '../map/MapPopUp'

export default class AccordionOrder extends Component {
  state = { activeIndex: 1 }

  handleClick = (index) => {
    this.setState({ activeIndex: index })
  }
  handleClickPrev = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex > index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion height="200px" styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={ this.handleClickPrev}
        >
          <Icon name='dropdown' />
          Use Current Location
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <MapPopUp/>
        <Button onClick={() => {this.handleClick(1)}}>Next</Button>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={ this.handleClickPrev}
        >
          <Icon name='dropdown' />
          Select Address
        </Accordion.Title>
        
        <Accordion.Content active={activeIndex === 1}>
  
          <AddAdress/>
        <ShowAddress/>
    

        <Button onClick={() => {this.handleClick(2)}}>Next</Button>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={ this.handleClickPrev}

        >
          <Icon name='dropdown' />
          Select Payment Type
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <SelectPaymentType/>
        </Accordion.Content>
      </Accordion>
    )
  }
}