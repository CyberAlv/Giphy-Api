import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import GifCard from './Components/GifCards'
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
    Axios.get(trendingURL).then((res) => {
    console.log(data);
    this.setState({giphyArray: data});
    })
    .catch((error) => {console.log(error)});
  }

  render(){
    let displayTrendingArray;

    if(this.state.giphyArray[0]){
      displayTrendingArray = (
        <div>
          {this.state.giphyArray.map((gif, idx) => {
            if (idx < 5)
            return <div key={gif.id}><GifCard imageSource={gif.images.downsized.url} /></div>

            else 
              return null
          })}
        </div>
      )
    }
    return(
      <div className="App">
      <h1>Search for Giphy:</h1>
      <SearchBar /> 
      </div>
    )
  }
}

export default App;
