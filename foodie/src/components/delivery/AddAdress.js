import React from 'react'
import { Button, Header, Image, Modal ,Icon } from 'semantic-ui-react'
import SignIn from '../../views/signIn/SignIn'
import AddAddressForm from './AddAddressForm'
import ChangeAddressButton from './ChangeAddressButton'
function AddAdress(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal className="centers"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Address</Button>}
    >
      <Modal.Header>Add the Details</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <AddAddressForm/>
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

export default AddAdress
