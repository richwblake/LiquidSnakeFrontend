import React, { Component } from 'react';
import Header from './Components/GameBoard/Header'
import GameBoardContainer from './Components/GameBoard/GameBoardContainer'
import RestartButton from './Components/GameBoard/RestartGameButton'


class App extends Component {
  render() {
    return(
      <div className='game'>
        <Header />
        <GameBoardContainer />
        <button className='btn'>say hi</button>
      </div>
    )
  }
}

export default App;
