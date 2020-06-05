import React, {Component} from "react";

const Search = (props) => {
        return(
            <div className="search">
                <input value={props.value} onChange={props.onChange} />
                <button onClick={props.onSearch}>Search</button>
            </div>
        )
    }


export default Search