import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import Snake from './Snake';


export default class GameBoardContainer extends Component {
    state = {
        snakePieces: [
            [0, 0],
            [0, 3],
            [0, 6]
        ]
    }

    

    componentDidMount() {

    }

    render() {
        return(
            <div className='game-board'>
                <Snake snakePieces={this.state.snakePieces} />
            </div>
        )
    }
}