import React from 'react';
import { Component } from 'react';
import ScorePanel from './ScorePanel';
import StartGameButton from './StartGameButton';
import PauseGameButton from './PauseGameButton';


class ControlPanel extends Component {
    render() {
        return(
            <div className='control-panel'>
                <ScorePanel />
                <StartGameButton />
                <PauseGameButton />
            </div>
        )
    }
};

export default ControlPanel;