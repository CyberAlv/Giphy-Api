import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import axios from 'axios';

class App extends Component  {

  constructor(props){
    super(props);
    this.state = {
      giphyArray: [],
    }
  }

  componentDidMount(){
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const trendingURL = 'http://api.giphy.com/v1/gifs/trending?api_key=Yyaf7C3GPzJVUMpFfkaHcqZO9twwUgus';
    axios.get(trendingURL).then((response) => {
      const data = response.data;
      console.log(data);

      this.setState({giphyArray: data});

    })

    .catch((error) => {console.log(error)});
  }

  render(){
    let displayTrendingArray;

    displayTrendingArray = (
      <ul>
        {this.state.giphyArray.map((def) => {
          return <li>{def}</li>
       })}
      </ul>
    )

    return(
      <div className="App">
      <h1>Search for Giphy:</h1>

      {displayTrendingArray};
      
    {/*<SearchBar />*/} 
    
      </div>
    )
  }
}

export default App;
