import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';

class App extends Component  {
  render(){
    return(
      <div className="App">
      <hi>Search for Giphy:</hi>
      <SearchBar /> 
      </div>
    )
  }
}

export default App;
