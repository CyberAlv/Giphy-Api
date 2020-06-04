import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchChange(term);
    }

    search() {
        this.props.onSearch(this.state.term);
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