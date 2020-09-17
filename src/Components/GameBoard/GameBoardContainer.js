import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import Square from './Square'

export default class GameBoardContainer extends Component {
    state = {
        board: {
            rows: 25,
            cols: 25,
            grid: [],
            food: this.getRandomSquareForFood()
        }
    }

    // Creates div grid to display snake board
    createGameGrid() {
        return this.state.board.grid.map(block => {
            if (block.row === this.state.board.food.row && block.col === this.state.board.food.col) {
                return <Square class={'food-square'} />
            } else {
                console.log(this.state.board.food.row, this.state.board.food.col)
                console.log(block.row, block.col)
                return <Square class={'board-square'} />
            }
        })
    }

    getRandomSquareForFood() {
        return {
            row: Math.floor(Math.random() * 25),
            col: Math.floor(Math.random() * 25)
        }
    }

    // Fills grid value in state to be used to generate grid of divs
    generateGridArray() {
        let grid = [];
        for (let row = 0; row < this.state.board.rows; row++) {
            for (let col = 0; col < this.state.board.cols; col++) {
                grid.push({
                    row,
                    col
                })
            }
        }

        this.setState({
            board: {
                ...this.state.board,
                grid
            }
        })
    }

    componentDidMount() {
        // this.setState({
        //     board: {
        //         ...this.state.board,
        //         food: 
        //     }
        // })
        this.generateGridArray();
    }

    render() {
        return(
            <div className='snake-board'>
                {this.createGameGrid()}
            </div>
        )
    }
}