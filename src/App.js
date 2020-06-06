import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';
import GifCard from './Components/GifCard.js';
import Search from './Components/Search';
import RandomButton from './Components/randomButton.js';

class App extends Component  {

  constructor(props){
    super(props);
    this.state = {
      giphyArray: [], searchInput: "", searchResults: [], randomGif: ''
    }
  }

  handleInput = (event) => {
    this.setState({searchInput: event.target.value});
  };

  handleSearch = () => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const searchInput = this.state.searchInput;
    const searchUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=" + apiKey;

    axios.get(searchUrl).then((response) => {
      const data = response.data.data;
      console.log(data);
      this.setState({searchResults: data});
    })
    .catch((error) => {
      console.log(error)
    });
    }

  outputRandom = () => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const randomUrl = "http://api.giphy.com/v1/gifs/random?api_key=" + apiKey;

    axios.get(randomUrl).then((response) => {
      //const data = response.data.data;
     // console.log(data);
      this.setState({randomGif: response.data.data.images.downsized_large.url});
      console.log(this.state.randomGif);
      
    })
    .catch((error) => {
      console.log(error)
    });
    
  }

  componentDidMount(){
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
   //const trendingURL = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
    const trendingURL = "http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;
    
    axios.get(trendingURL).then((response) => {
      const data = response.data.data;
      
      console.log(data);

      this.setState({giphyArray: data});

    })

    .catch((error) => {console.log(error)});
  }

  render(){
    let displayTrendingArray;
    let displaySearchResults;
    let displayRandom;

    if(this.randomUrl != ''){
       displayRandom = (
      <div>
        <img src={this.state.randomGif}/>
        </div>
    
    )}
    else 
        displayRandom = '';

    if(this.state.searchResults[0])
    {
      displaySearchResults = (
        <div>
          {this.state.searchResults.map((gif , idx) => {
            if(idx < 5)
            {
              return <div key={gif.id}><GifCard imageSource={gif.images.downsized_large.url}/></div>
            }

            else  
              return null
          })}
        </div>
      )
    }

    else
      displaySearchResults = "";

    if(this.state.giphyArray[0]){
    
    displayTrendingArray = (
      <div>
        {this.state.giphyArray.map((gif , idx) => {
          if(idx < 5)
            //return <div key={gif.id}><img src={gif.images.downsized_large.url} alt="gif" /></div>
        return <div key={gif.id}><GifCard imageSource={gif.images.downsized_large.url}/></div>
          
            else  
              return null
       })}
      </div>
    )
    }
      else  
        displayTrendingArray = ""

    return(
      <div className="App">
      <h1>Search for Giphy:</h1>

      <RandomButton
        onSearch ={this.outputRandom}
        />
     
     
      <Search 
        value={this.state.searchInput}
        onChange={this.handleInput}
        onSearch={this.handleSearch}
        />
      
        {displaySearchResults}
        {displayRandom}

{
      <div> 
      <h1>Trending GIFS now: </h1>
      {displayTrendingArray}
      </div>
      
      
 }
      </div>
    )
  }
}

export default App;
