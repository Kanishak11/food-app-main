import React from 'react'
import { Button, Header, Image, Modal ,Icon } from 'semantic-ui-react'
import LoginForm from '../../views/login/Login'
import './LoginModal.css'
function ModalExampleModal(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal className="centers"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    
      trigger={ <p>LOG IN</p>}
    >
      <Modal.Header>Log In</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
            <LoginForm/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(true)}>
          Nope
        </Button>
        <Button
          id="open"
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

export default ModalExampleModal
