import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ScorePanel from './ScorePanel';
import { stopGame } from '../../Actions/Board/stopGame';
import NameInput from './NameInput';


class ControlPanel extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return(
            <div className='control-panel'>
                <ScorePanel currentScore={this.props.currentScore}/>
                <NameInput handleChange={this.handleChange} nameValue={this.state.name} />
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