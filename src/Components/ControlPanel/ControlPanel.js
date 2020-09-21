import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ScorePanel from './ScorePanel';
import StartGameButton from './StartGameButton';
import RestartGameButton from './RestartGameButton';


class ControlPanel extends Component {
    render() {
        return(
            <div className='control-panel'>
                <ScorePanel currentScore={this.props.currentScore}/>
                <StartGameButton />
                <RestartGameButton />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        currentScore: state.score.currentScore
    }
}

export default connect(mapStateToProps)(ControlPanel);