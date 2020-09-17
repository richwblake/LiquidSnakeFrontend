import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'
import Food from './Food'

export default class GameBoardContainer extends Component {
    state = {
        board: {
            rows: 25,
            cols: 25,
            grid: []
        }
    }

    // Creates div grid to display snake board
    createGameGrid() {
        return this.state.board.grid.map(block => <div key={block.row.toString() + '-' + block.col.toString()} className='board-square'></div>)
    }

    getRandomSquareForFood() {
        return {
            row: Math.floor(Math.random() * this.state.board.rows),
            col: Math.floor(Math.random() * this.state.board.cols)
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
        this.generateGridArray();
    }

    render() {
        // const createGameGrid = () => {
        //     console.log("this ran")
        //     return this.state.board.grid.map(block => <div key={block.row.toString() + '-' + block.col.toString()} className='board-square'></div>)
        // }

        return(
            <div className='snake-board'>
                <Food foodCoordinates={this.getRandomSquareForFood()} />
            </div>
        )
    }
}