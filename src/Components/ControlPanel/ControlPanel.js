import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ScorePanel from './ScorePanel';
import StartGameButton from './StartGameButton';
import RestartGameButton from './RestartGameButton';
import { stopGame } from '../../Actions/Board/stopGame';


class ControlPanel extends Component {
    render() {
        return(
            <div className='control-panel'>
                <ScorePanel currentScore={this.props.currentScore}/>
                <StartGameButton gameIsRunning={this.props.gameIsRunning} restartGame={this.props.restartGame}/>
                <RestartGameButton />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        currentScore: state.score.currentScore,
        gameIsRunning: state.board.gameIsRunning
    }
}

const mapDispatchToProps = dispatch => {
    return {
        restartGame: () => {
            dispatch(stopGame());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);