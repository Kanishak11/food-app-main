import React from 'react'
import { Button , Image, Modal  } from 'semantic-ui-react'
import Map from './Map'
function MapPopUp(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal className="centers"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ <Button>Open Map</Button>}
    >
      <Modal.Header>click on your location</Modal.Header>
      <Modal.Content>
           <Map/>
            <br/>
        <Modal.Description>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(true)}>
          Nope
        </Button>
        <Button
          content="Done"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default MapPopUp  
