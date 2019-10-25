import React, { Component } from 'react'
import '../tutorial.css';
import Board from './Board';
export default class Game extends Component {
    render() {
        return (
            <div className="game">  
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-infor">
                    <div>

                    </div>
                    <ol></ol>
                </div>
            </div>
        )
    }
}
