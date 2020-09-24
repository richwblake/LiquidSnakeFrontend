import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHighScores } from '../../Actions/Score/getHighScores';
import Score from './Score'

class HighscoreContainer extends Component {

    componentDidMount() {
        this.props.getHighScores();
    }

    sortPlayersByScore() {
        let players = this.props.players;
        return players.sort((a, b) => b.score - a.score)
    }

    render() {
        return(
            <div className='highscores'>
                <h1>Hiscore Page</h1>
                <Score players={this.props.players}/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        players: state.score.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getHighScores: () => {
            dispatch(getHighScores())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighscoreContainer);