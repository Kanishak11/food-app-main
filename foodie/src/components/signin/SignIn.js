import React from 'react'
import { Button, Header, Image, Modal ,Icon } from 'semantic-ui-react'
import SignIn from '../../views/signIn/SignIn'
function ModalForSignIN(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal className="centers"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    
      trigger={  <button> SignIN </button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
            <SignIn/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
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

export default ModalForSignIN
