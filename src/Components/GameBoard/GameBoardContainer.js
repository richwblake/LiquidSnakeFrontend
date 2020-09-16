import React, { Component } from 'react';
import '../../Stylesheets/gameboard.css'

export default class GameBoardContainer extends Component {
    state = {
        board: {
            rows: 20,
            cols: 20,
            grid: []
        }
    }

    componentDidMount() {
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

    createGameGrid() {
        return this.state.board.grid.map(block => <div key={block.row.toString() + '-' + block.col.toString()} className='board-square'></div>)
    }

    render() {
        // const createGameGrid = () => {
        //     console.log("this ran")
        //     return this.state.board.grid.map(block => <div key={block.row.toString() + '-' + block.col.toString()} className='board-square'></div>)
        // }

        return(
            <div className='snake-board'>
                {this.createGameGrid()}
            </div>
        )
    }
}