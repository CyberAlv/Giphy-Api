import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';

class App extends Component  {
  render(){
    return(
      <div className="App">
      <h1>Search for Giphy:</h1>
      <SearchBar /> 
      </div>
    )
  }
}

export default App;
