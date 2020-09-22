import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import SnakeContainer from '../Snake/SnakeContainer'
import Food from './Food';
import { connect } from 'react-redux';
import ControlPanel from '../ControlPanel/ControlPanel'

class GameBoardContainer extends Component {
    render() {
        return(
            <div className='game-board'>
                <ControlPanel />
                <SnakeContainer />
                <Food foodCoordinates={this.props.foodCoordinates} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        foodCoordinates: state.board.foodCoordinates
    }
}

export default connect(mapStateToProps)(GameBoardContainer);