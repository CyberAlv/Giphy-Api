import React, { Components } from 'react'

class Gifcard extends Components {
    constructor(props){
        super(props)
        this.state = {
            imageUrl: this.props,
        }
    }

    render()
    {
        return (
            <div>
            <img src={this.state.imageUrl} alt="some gif" />
            </div>
        )
    }
}