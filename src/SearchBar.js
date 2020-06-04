import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term:"",
        state: "Regular",
        gifs: this.props.gifs,
        order: "default"
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchChange(term);
    }
    
    componentDidMount(){
        axios.get.apply('http://api.giphy.com/v1/gifs/search?q=%27' + this.state.term).then((response) => {
            this.setState( {gifs: response.data ["data"], state: "searching"});
            this.state.gids.forEach((element) => {console.log(element.ratings)})
        })
    }
    
    search = (result) => {
        this.props.onSearch(this.state.term); {
            axios.get.apply('http://api.giphy.com/v1/gifs/random?api_key=0aIzVnzB2PPXO4Mtz0ZQNPALfV7CxgIT').then((response) => {
                this.setState({gifs: response.data ["data"], state: "searching"})
            });
        }             
        console.log('results: ')
        }

    pressEnter = (event) => {
        if(event.key === 'Enter'){
            this.search();
        }
    }

    
    render() {
        return (
            <div className="search" type="submit">
                <input onTermChange={event => this.onInputChange(event.target.value)} onKeyPress={this.pressEnter} />
                <a onClick={this.search}>Giph Me</a>              
            </div>          
        );
    }
}


export default SearchBar;