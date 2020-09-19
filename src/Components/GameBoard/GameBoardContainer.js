import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import SnakeContainer from '../Snake/SnakeContainer'
import Helpers from '../../Helpers';


export default class GameBoardContainer extends Component {
    state =  {
        
    }

    componentDidMount() {

    }

    getRandomCoordinatesForFood() {
        return Helpers.getRandomCoordinatesForFood();
    }

    render() {
        return(
            <div className='game-board'>
                <SnakeContainer />
            </div>
        )
    }
}