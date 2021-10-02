import React from "react";
class Navigation extends React.Component{
  render(){
    const {getBeer} = this.props;
    return(
      <div className='navigation'>
      <button onClick = {() => getBeer(1)}>1</button>
      <button onClick = {() => getBeer(2)}>2</button>
      <button onClick = {() => getBeer(3)}>3</button>
      <button onClick = {() => getBeer(4)}>4</button>
      <button onClick = {() => getBeer(5)}>5</button>
    </div>
    )
  }
}
export default Navigation;