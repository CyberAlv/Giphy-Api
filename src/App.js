import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component  {
  handleTermChange(term){
    console.log(term);
  }

  render(){
    return(
      <div>
      <hi>Search for Giphy:</hi>
      <SearchBar onTermChange={this.handleTermChange}/> 
      </div>
    )
  }
}

export default App;
