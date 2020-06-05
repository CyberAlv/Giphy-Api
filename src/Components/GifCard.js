import React, { Components } from 'react'

class GifCard extends Components {
    constructor(props){
        super(props)
        this.state = {
            imageUrl: this.props.imageSource,
        }
    }

    render()
    {
        return (
            <div className="container">
            <img src={this.state.imageUrl} alt="some gif" />
            </div>
        )
    }
}

export default GifCard;