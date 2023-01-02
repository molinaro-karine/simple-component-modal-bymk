# Getting Started with Create React App

## Installation 

Run the following command:`npm install simple-component-modal-bymk`

The modal component accepts three props which are required:
 **message** prop which is used to display in the modal

 **isVisible** is taking a boolean value and will display the modal when the value is true

 **handleClose** is taking a callback function and will call this function from the modal when closing button is clicked or Esc is pressed

## example with this modal component

export function Example() {

    const [displayModal, setDisplayModal] = useState(true);

    return (
        <Modal 
            isVisible={displayModal} 
            message={"write your message here!"} 
            handleClose={() => setDisplayModal(false)}
        />)
}
