import React, { Component } from 'react';
import Snake from './Snake';

export default class SnakeContainer extends Component {
    state = {
        snakePieces: [
            [0, 0],
            [0, 4],
            [0, 8]
        ],
        direction: 'RIGHT',
        velocity: 200
    }

    componentDidMount() {
        setInterval(this.moveSnake, this.state.velocity)
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
        
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
                head = [head[0], head[1] - 4];
                break;
            case 'UP':
                head = [head[0] - 4, head[1]];
                break;
            case 'RIGHT':
                head = [head[0], head[1] + 4];
                break;
            case 'DOWN':
                head = [head[0] + 4, head[1]];
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

    render() {
        return(
            <Snake snakePieces={this.state.snakePieces} />
        )
    }
};