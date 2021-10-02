import React from "react";
class Navigation extends React.Component{
  render(){
    const {setBeer,getBeer} = this.props;
    return(
      <div className='navigation'>
      <button onClick = {() => getBeer(setBeer,1)}>1</button>
      <button onClick = {() => getBeer(setBeer,2)}>2</button>
      <button onClick = {() => getBeer(setBeer,3)}>3</button>
      <button onClick = {() => getBeer(setBeer,4)}>4</button>
      <button onClick = {() => getBeer(setBeer,5)}>5</button>
    </div>
    )
  }
}
export default Navigation;