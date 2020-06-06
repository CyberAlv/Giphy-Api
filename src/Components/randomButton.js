import React, {Component} from 'react'

const RandomButton = (props) => {
    return(
        <div className="randomButton">
            <button onClick={props.onSearch}>Random Gif</button>
        </div>
    )
}

export default RandomButton