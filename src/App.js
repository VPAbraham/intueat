import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChefInfo from './components/Chef-info/Chef-info';
import ChefBio from './components/Chef-bio/Chef-bio';
import { chefData } from './assets/chef-data';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: chefData.name,
      accolades: chefData.accolade,
      location: chefData.location,
      tags: chefData.tags,
      photos: chefData.photos
    }
  }

  render(){
    console.log(chefData)
  return (
    <div className="App">
      <Header />
      <ChefInfo name={this.state.name} accolades={this.state.accolades} location={this.state.location}/>
      <ChefBio />
    </div>
  );
  }
}

export default App;
