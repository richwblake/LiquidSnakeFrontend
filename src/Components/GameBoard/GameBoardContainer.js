import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import SnakeContainer from '../Snake/SnakeContainer'


export default class GameBoardContainer extends Component {
    state =  {
        
    }

    componentDidMount() {

    }

    getRandomCoordinatesForFood() {
        
    }

    render() {
        return(
            <div className='game-board'>
                <SnakeContainer />
            </div>
        )
    }
}