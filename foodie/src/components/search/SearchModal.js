import React from 'react'
import { Button , Image, Modal  } from 'semantic-ui-react'
import DisplaySearchItems from '../displaysearchitems/DisplaySearchItems'
import Search from './Search'
import Show from './Show'
function SearchModal(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal className="centers"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ <Button>Search</Button>}
    >
      <Modal.Header>Search For Your Itms</Modal.Header>
      <Modal.Content>
            <Search/>
            <br/>
        <Modal.Description>
           <DisplaySearchItems/>
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

export default SearchModal  
