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
          <label>Full name</label>
          <input type="text" />
          <label>Date of Birth</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" minlength="6"/>
          <label>Email</label>
          <input type="email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Registration
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}
export default Form