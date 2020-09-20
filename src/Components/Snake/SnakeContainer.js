import React, { Component } from 'react';
import Snake from './Snake';
import Helpers from '../../Helpers';
import { connect } from 'react-redux';

class SnakeContainer extends Component {
    state = {
        snakePieces: [
            [0, 0],
            [4, 0],
            [8, 0]
        ],
        direction: 'RIGHT',
        velocity: 200
    }

    componentDidMount() {
        alert('Start game?');
        setInterval(this.moveSnake, this.state.velocity)
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
        this.checkIfSnakeIsOutOfBound();
        this.checkIfSnakeAteItself();
    }

    onKeyDown = (event) => {
        switch(event.keyCode) {
            case 37:
                if (this.state.direction !== 'RIGHT') {
                    this.setState({ direction: 'LEFT' });
                }
                break;
            case 38:
                if (this.state.direction !== 'DOWN') {
                    this.setState({ direction: 'UP' });
                }
                break;
            case 39:
                if (this.state.direction !== 'LEFT') {
                    this.setState({ direction: 'RIGHT' });
                }
                break;
            case 40:
                if (this.state.direction !== 'UP') {
                    this.setState({ direction: 'DOWN' });
                }
                break;
            default:
                break;
        }
        console.log(this.state.direction)
    }

    moveSnake = () => {
        let snake = [...this.state.snakePieces];
        let head = snake[snake.length - 1];

        switch(this.state.direction) {
            case 'LEFT':
                head = [head[0] - 4, head[1]];
                break;
            case 'UP':
                head = [head[0], head[1] - 4];
                break;
            case 'RIGHT':
                head = [head[0] + 4, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 4];
                break;
            default:
                break;
        }

        snake.push(head);
        snake.shift();
        this.setState({
            snakePieces: snake
        });
    }

    checkIfSnakeIsOutOfBound() {
        const head = [...this.state.snakePieces[this.state.snakePieces.length - 1]];
        if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0 ) {
            this.gameOver(`You hit a wall! Your score is ${this.state.snakePieces.length}`);
        }
    }

    checkIfSnakeAteItself() {
        let snake = [...this.state.snakePieces];
        const head = snake[snake.length - 1];
        snake.pop();

        snake.forEach(snakePiece => {
            if (head[0] === snakePiece[0] && head[1] === snakePiece[1]) {
                this.gameOver(`You ate yourself! Your score is ${this.state.snakePieces.length}`);
            }
        })
    }

    gameOver = (message) => {
        alert(message);
        this.setState(Helpers.getInitialState())
    }

    render() {
        return(
            <Snake snakePieces={this.state.snakePieces} />
        )
    }
};

const mapStateToProps = state => {
    return {
        foodCoordinates: state.board.foodCoordinates
    }
}

export default connect(mapStateToProps)(SnakeContainer);