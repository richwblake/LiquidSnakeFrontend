import React, { Component } from 'react';
import Header from './Components/GameBoard/Header'
import GameBoardContainer from './Components/GameBoard/GameBoardContainer'


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
