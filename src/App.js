import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';
import GifCard from './Components/GifCard.js'

class App extends Component  {

  constructor(props){
    super(props);
    this.state = {
      giphyArray: [],
    }
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
      {/*<SearchBar />*/}
      <div> 
      <h1>Trending GIFS now: </h1>
      {displayTrendingArray}
      </div>
      
    
      </div>
    )
  }
}

export default App;
