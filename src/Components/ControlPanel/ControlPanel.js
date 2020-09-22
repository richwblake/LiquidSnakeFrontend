import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ScorePanel from './ScorePanel';
import { stopGame } from '../../Actions/Board/stopGame';
import NameInput from './NameInput';
import { submitPlayerScore } from '../../Actions/Score/submitPlayerScore';


class ControlPanel extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        if (event.target.value.length <= 3) {
            this.setState({
                name: event.target.value
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.name)
        console.log(this.props.currentScore)
        this.props.submitPlayerScore({
            name: this.state.name.toUpperCase(),
            score: this.props.currentScore
        })
    }

    render() {
        return(
            <div className='control-panel'>
                <ScorePanel currentScore={this.props.currentScore}/>
                <NameInput handleSubmit={this.handleSubmit} handleChange={this.handleChange} nameValue={this.state.name} />
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
        },
        submitPlayerScore: player => {
            dispatch(submitPlayerScore(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);