import { render } from '@testing-library/react';
import React from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
class Form extends React.Component{
  render(){
    const {handleShow,handleClose,show} = this.props;
    return(
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Registration</Modal.Title>
          <button onClick={handleClose}>x</button>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Full name</label>
            <input minlength="4" type="text" required/>
            <label>Date of Birth</label>
            <input type="text" required/>
            <label>Password</label>
            <input type="password" minlength="6" required/>
            <label>Email</label>
            <input type="email" required/>
            <button className='button_form'>Registration</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Registration
          </Button> */}
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}
export default Form