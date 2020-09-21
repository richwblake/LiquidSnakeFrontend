import React, { Component } from 'react';
import Header from './Components/GameBoard/Header'
import GameBoardContainer from './Components/GameBoard/GameBoardContainer'
import ControlPanel from './Components/ControlPanel/ControlPanel';


class App extends Component {
  render() {
    return(
      <div className='game'>
        <Header />
        <GameBoardContainer />
        <ControlPanel />
      </div>
    )
  }
}

export default App;
