import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import SnakeContainer from '../Snake/SnakeContainer'
import Helpers from '../../Helpers';
import Food from './Food';
import { connect } from 'react-redux';


class GameBoardContainer extends Component {
    
    componentDidMount() {

    }

    getRandomCoordinatesForFood() {
        return Helpers.getRandomCoordinates();
    }

    render() {
        return(
            <div className='game-board'>
                {console.log(this.props.snake)}
                <SnakeContainer />
                <Food foodCoordinates={this.getRandomCoordinatesForFood()} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        snake: state.snake
    }
}

export default connect(mapStateToProps)(GameBoardContainer);