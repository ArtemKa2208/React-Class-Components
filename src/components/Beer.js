import React from 'react'
import {URL_PHOTO_BOTTLE} from '../constants'
class Beer extends React.Component{
  render(){
    return(
      <div className='beerCard'>
      <img  src={this.props.image_url || URL_PHOTO_BOTTLE} className='beerPhotos' alt ='photo' />
      <h2 className='beer-name'>{this.props.name}</h2>
      <p>{this.props.tagline}</p>
      <p><strong>First brewed:</strong> {this.props.first_brewed}</p>
      <p>{this.props.description}</p>
      <p><strong>Abv:</strong> {this.props.abv}</p>
      <p><strong>Attenuation level:</strong> {this.props.attenuation_level}</p>
      <p><strong>Brewers tips:</strong> {this.props.brewers_tips}</p>
      <p><strong>Contributed by:</strong> {this.props.contributed_by}</p>
      <p><strong>Ebc:</strong> {this.props.ebc}</p>
      <p><strong>Ibu:</strong> {this.props.ibu}</p>
      <p><strong>Ph:</strong> {this.props.ph}</p>
      <p><strong>Srm:</strong> {this.props.srm}</p>
      <p><strong>Target FG:</strong> {this.props.target_fg}</p>
      <p><strong>Target OG:</strong> {this.props.target_og}</p>
      <p><strong>Volume:</strong> {this.props.volume.value} {this.props.volume.unit} </p>
      <p><strong>Boil volume:</strong> {this.props.boil_volume.value} {this.props.boil_volume.unit}</p>
      <h2>Ingredients:</h2>
      <h3>Hops</h3>
      {this.props.ingredients.hops.map( (elem,index) => {
        return(
          <p key = {'hops'+index}>{elem.name}: {elem.amount.value} {elem.amount.unit}</p>
        )
      })}
      <h3>Malt</h3>
      {this.props.ingredients.malt.map( (elem,index) => {
        return(
          <p key = {'malt'+index}>{elem.name}: {elem.amount.value} {elem.amount.unit}</p>
        )
      })}
      <h3>Yeast</h3>
      <p>{this.props.ingredients.yeast}</p>
      <h2>Food pairing:</h2>
      {this.props.food_pairing.map( (elem,index) => {
        return(
          <p key={'food'+index}>{index+1}) {elem}</p>
        )
      })}
    </div>
    )
  }
}

export default Beer