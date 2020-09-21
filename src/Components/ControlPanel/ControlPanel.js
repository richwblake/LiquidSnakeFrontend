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
                <ScorePanel />
                <StartGameButton />
                <RestartGameButton />
            </div>
        )
    }
};

export default connect()(ControlPanel);