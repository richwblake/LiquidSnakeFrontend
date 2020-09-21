import React, { Component } from 'react';
import Snake from './Snake';
import { connect } from 'react-redux';
import { updateSnake } from '../../Actions/Snake/updateSnake';
import { resetSnake } from '../../Actions/Snake/resetSnake';
import { makeNewFood } from '../../Actions/Board/makeNewFood';
import { changeSnakeDirection } from '../../Actions/Snake/changeSnakeDirection';
import { setCurrentScore } from '../../Actions/Score/setCurrentScore';

class SnakeContainer extends Component {

    componentDidMount() {
        alert('Start game?');
        this.startGame();
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
        this.checkIfSnakeIsOutOfBound();
        this.checkIfSnakeAteItself();
        this.checkIfSnakeAteFood();
    }

    onKeyDown = (event) => {
        switch(event.keyCode) {
            case 37:
                if (this.props.snake.direction !== 'RIGHT') {
                    this.props.changeSnakeDirection('LEFT');
                }
                break;
            case 38:
                if (this.props.snake.direction !== 'DOWN') {
                    this.props.changeSnakeDirection('UP');
                }
                break;
            case 39:
                if (this.props.snake.direction !== 'LEFT') {
                    this.props.changeSnakeDirection('RIGHT');
                }
                break;
            case 40:
                if (this.props.snake.direction !== 'UP') {
                    this.props.changeSnakeDirection('DOWN');
                }
                break;
            default:
                break;
        }
    }

    moveSnake = () => {
        let snake = [...this.props.snake.snakePieces];
        let head = snake[snake.length - 1];

        switch(this.props.snake.direction) {
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
        this.props.updateSnake(snake);
    }

    checkIfSnakeIsOutOfBound() {
        const head = [...this.props.snake.snakePieces[this.props.snake.snakePieces.length - 1]];
        if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0 ) {
            this.gameOver(`You hit a wall! Your score is ${this.props.snake.snakePieces.length}`);
        }
    }

    checkIfSnakeAteItself() {
        let snake = [...this.props.snake.snakePieces];
        const head = snake[snake.length - 1];
        snake.pop();

        snake.forEach(snakePiece => {
            if (head[0] === snakePiece[0] && head[1] === snakePiece[1]) {
                this.gameOver(`You ate yourself! Your score is ${this.props.snake.snakePieces.length}`);
            }
        })
    }

    checkIfSnakeAteFood() {
        const snake = [...this.props.snake.snakePieces];
        const head = snake[snake.length - 1];

        if (head[0] === this.props.foodCoordinates[0] && head[1] === this.props.foodCoordinates[1]) {
            this.makeSnakeBigger();
            this.props.makeNewFood();
        }
    }

    makeSnakeBigger() {
        let newSnake = [...this.props.snake.snakePieces]
        newSnake.unshift([]);
        this.props.updateSnake(newSnake);
        this.props.setCurrentScore(newSnake.length);
    }

    gameOver = (message) => {
        alert(message);
        this.props.resetSnake();
        this.props.makeNewFood();
    }

    startGame() {
        setInterval(this.moveSnake, this.props.snake.velocity)
    }

    render() {
        return(
            <Snake snakePieces={this.props.snake.snakePieces} />
        )
    }
};

const mapStateToProps = state => {
    return {
        foodCoordinates: state.board.foodCoordinates,
        snake: state.snake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSnake: snakePieces => {
            dispatch(updateSnake(snakePieces));
        },
        resetSnake: () => {
            dispatch(resetSnake());
        },
        makeNewFood: () => {
            dispatch(makeNewFood());
        },
        changeSnakeDirection: direction => {
            dispatch(changeSnakeDirection(direction))
        },
        setCurrentScore: snakeLength => {
            dispatch(setCurrentScore(snakeLength))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnakeContainer);