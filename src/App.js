import './App.css';
import React, { useCallback, useEffect } from 'react';
import Beer from './components/Beer';
import Form from './components/Form';
import ToolBar from './components/ToolBar';
import Navigation from './components/Navigation';
import { DEFAULT_PAGE, URL_API } from './constants'
import {sortBy} from './utils';
import {getBeer} from './services/requestService'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { render } from '@testing-library/react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beer: [],
      show: false,
    };
  }

  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});

  handlerInput = ({ target: { value } }) => {
    if (value.trim()) {
      getBeer(this.setState.bind(this),DEFAULT_PAGE, URL_API + `?beer_name=${value}`)
    } else {
      getBeer(this.setState.bind(this));
    }
  }
  componentDidMount(){
    getBeer(this.setState.bind(this));
  }

  render(){
    return(
      <div className='App'>
        <ToolBar handleShow={this.handleShow} handlerInput={this.handlerInput} sortBy={(e) => sortBy(e,this.setState.bind(this),getBeer,this.state.beer)} />
        <Form handleShow={this.handleShow} handleClose={this.handleClose} show={this.state.show} />
        <div className='beerBox'>
          {this.state.beer.map((elem, index) => {
            return (
              <Beer
                key={index}
                name={elem.name}
                tagline={elem.tagline}
                first_brewed={elem.first_brewed}
                description={elem.description}
                abv={elem.abv}
                attenuation_level={elem.attenuation_level}
                brewers_tips={elem.brewers_tips}
                contributed_by={elem.contributed_by}
                ebc={elem.ebc}
                ibu={elem.ibu}
                ph={elem.ph}
                srm={elem.srm}
                target_fg={elem.target_fg}
                target_og={elem.target_og}
                image_url={elem.image_url}
                volume={elem.volume}
                boil_volume={elem.boil_volume}
                ingredients={elem.ingredients}
                food_pairing={elem.food_pairing}
              />
            )
          })}
        </div>
        <Navigation setBeer={this.setState.bind(this)} getBeer={getBeer} />
      </div>
    );
  }
}

export default App;
