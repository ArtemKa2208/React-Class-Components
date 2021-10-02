import React from 'react';
import { Button} from 'react-bootstrap';
class ToolBar extends React.Component{
  render(){
    const {handleShow,handlerInput,sortBy} = this.props;
    return(
      <div className='tool-bar'>
      <input placeholder='Enter the name of the beer' type='text' onChange = {handlerInput}/>
      <select onChange = {sortBy}>
      <option disabled selected>Sort by</option>
      <option>Default</option>
      <option>Name</option>
      <option>Abv(increasing)</option>
      <option>Abv(decay)</option>
      </select>
      <Button variant="primary" onClick={handleShow}>
        Registration
      </Button>
    </div>
    )
  }
}
export default ToolBar;