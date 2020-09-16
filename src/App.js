import React, { Component } from 'react';
import GameBoardContainer from './Components/GameBoard/GameBoardContainer'
import Header from './Components/GameBoard/Header'

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <GameBoardContainer />
      </div>
    )
  }
}

export default App;
