import React, {Component} from 'react'

class GifCard extends Component {
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