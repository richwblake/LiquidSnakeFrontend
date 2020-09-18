import React, { Component } from 'react';
import Snake from './Snake';

export default class SnakeContainer extends Component {
    state = {
        snakePieces: [
            [0, 0],
            [0, 3],
            [0, 6]
        ]
    }

    render() {
        return(
            <Snake snakePieces={this.state.snakePieces} />
        )
    }
};