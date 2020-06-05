import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import Axios from 'axios';

class App extends Component  {
  constructor(props){
  this.state = {
    giphyArray: []
    }
  }
 
  componentDidMount(){
    const apiKey = process.env.REACT_GIPHY_API_KEY;
    const trendingURL = "http:api.giphy.com/vq/gifs/trending?api_key=" +apiKey;
    Axios.get(trendingURL).then(res) => {
    console.log(data);
    this.setState({giphyArray: data});
    }
    .catch((error) => {console.log(error)});
  }

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
