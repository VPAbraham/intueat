import React, { Component } from 'react';
import Header from './components/Header/Header';
import ImageGal from './components/Image-gal/Image-gal';
import BarRight from './components/Bar-right/Bar-right';
import BarLeft from './components/Bar-left/Bar-left';

import { chefData } from './assets/chef-data';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: chefData.name,
      accolades: chefData.accolade,
      location: chefData.location,
      about: chefData.about,
      tags: chefData.tags,
      photos: chefData.photos,
      experience: chefData.experience,
      requirements: chefData.requirements,
      includes: chefData.includes,
      reviews: chefData.reviews,
      tags: chefData.tags

    }
  }

  render(){
    return (
      <div className='App'>
        <Header />
        <ImageGal />
        <div className='content-container'>
          <BarLeft 
          name={this.state.name} 
          accolades={this.state.accolades} 
          location={this.state.location}
          about={this.state.about}
          experience={this.state.experience}
          requirements={this.state.requirements}
          includes={this.state.includes}
          reviews={this.state.reviews}
          tags={this.state.tags}
          />
          {/* BarLeft is the container for most of the chef-related data output */}
          <BarRight reviews={this.state.reviews}/>
          {/* BarRight is the container for the UI component that handles booking the chef */}
        </div>
      </div>
    );
  }
}

export default App;
