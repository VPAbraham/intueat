import React, { Component } from 'react';
import Header from './components/Header/Header';

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
      reviews: chefData.reviews
    }
  }

  render(){
    return (
      <div className='App'>
        <Header />
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
          />
          {/* BarLeft is the container for most of the chef-related data output */}
          <BarRight />
          {/* BarRight is the container for the UI component that handles booking the chef */}
        </div>
      </div>
    );
  }
}

export default App;
