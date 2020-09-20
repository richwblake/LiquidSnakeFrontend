import React, { Component } from 'react';
import Snake from './Snake';
import Helpers from '../../Helpers';

export default class SnakeContainer extends Component {
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
    }

    onKeyDown = (event) => {
        switch(event.keyCode) {
            case 37:
                this.setState({ direction: 'LEFT' })
                break;
            case 38:
                this.setState({ direction: 'UP' })
                break;
            case 39:
                this.setState({ direction: 'RIGHT' })
                break;
            case 40:
                this.setState({ direction: 'DOWN' })
                break;
            default:
                break;
        }
        console.log(this.state.direction)
    }

    moveSnake = () => {
        console.log([...this.state.snakePieces])
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
            this.gameOver();
        }
    }

    gameOver = () => {
        alert('GAME OVER');
        this.setState(Helpers.getInitialState())
    }

    render() {
        return(
            <Snake snakePieces={this.state.snakePieces} />
        )
    }
};