import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import SnakeContainer from '../Snake/SnakeContainer'
import Food from './Food';
import { connect } from 'react-redux';
import ControlPanel from '../ControlPanel/ControlPanel'

class GameBoardContainer extends Component {
    render() {
        return(
            <React.Fragment>
                <div className='game-board'>
                    <SnakeContainer />
                    <Food foodCoordinates={this.props.foodCoordinates} />
                </div>
                <ControlPanel />
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        foodCoordinates: state.board.foodCoordinates
    }
}

export default connect(mapStateToProps)(GameBoardContainer);