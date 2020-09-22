import React, { Component } from 'react';
import Header from './Components/GameBoard/Header'
import GameBoardContainer from './Components/GameBoard/GameBoardContainer'
import ControlPanel from './Components/ControlPanel/ControlPanel';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/ControlPanel/NavBar';
import HighscoreContainer from './Components/Highscore/HighscoreContainer'


class App extends Component {
  render() {
    return(
      <Router>
        <div>
        <Header />
        <NavBar />
        <Route path='/' exact component={GameBoardContainer} />
        <Route path='/hiscores' exact component={HighscoreContainer} />
        </div>
      </Router>
    )
  }
}

export default App;
