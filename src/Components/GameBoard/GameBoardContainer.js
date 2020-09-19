import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import SnakeContainer from '../Snake/SnakeContainer'
import Helpers from '../../Helpers';
import Food from './Food';


export default class GameBoardContainer extends Component {
    
    componentDidMount() {

    }

    getRandomCoordinatesForFood() {
        return Helpers.getRandomCoordinates();
    }

    render() {
        return(
            <div className='game-board'>
                <SnakeContainer />
                <Food foodCoordinates={this.getRandomCoordinatesForFood()} />
            </div>
        )
    }
}