import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChefInfo from './components/Chef-info/Chef-info';
import { chefData } from './assets/chef-data';
import logo from './logo.svg';
import brewerLogo from './assets/brewer-digital.png';
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
    </div>
  );
  }
}

export default App;
