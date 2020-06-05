import React, { Component } from 'react';
import Search from './Search'
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "",
        searchInput: "",
        gifs: this.props.gifs,
        order: "default"
        }
    }

    handleChange(term) {
        this.setState({term});
        this.props.onSearchChange(term);
        console.log(this.state.term)
        this.componentDidMount(term);
    }

    handleInput = (event) => {
        this.setState({ searchInput: event.target.value});
        
    }

    handleSearch = () => {
        axios
        .get("http://api.giphy.com/v1/gifs/search?q=%27" + this.state.searchInput)
        .then((res) => {
            const data = res.data;

            const newGiphyObj = {
                name: data.name,
                imageUrl: data.sprites.front_default,
            }
            this.setState({ term: newGiphyObj})
        });
    }
    
    componentDidMount(term){
        axios
        .get('http://api.giphy.com/v1/gifs/search?q=%27' + this.state.term).then(res => {
            console.log(res);
            this.setState({ term: res.data})
        })
    } 
              
    render() {
        return (
            <div className="search" type="submit">
                <input onTermChange={event => this.handleChange(event.target.value)} onKeyPress={this.pressEnter} />
                <Search 
                value={this.state.searchInput}
                onChange={this.handleInput}
                onSearch={this.handleSearch}  
                onClick={this.search}>Giph Me
                /</Search>>         
            </div>          
        );
    }
}


export default SearchBar;