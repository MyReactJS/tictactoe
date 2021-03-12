
import React from 'react';
import Square from './Square';
import './Square.Style.css';
const Board = () => {
    return (
        <div className="board">
            <div className="board-row">
                <Square>1 </Square>
                <Square>1 </Square>
                <Square>1 </Square>
            </div>
            <div className="board-row">
                <Square>1 </Square>
                <Square>1 </Square>
                <Square>1 </Square>
            </div>
            <div className="board-row">
                <Square>1 </Square>
                <Square>1 </Square>
                <Square>1 </Square>
            </div>
        </div>
    );
}
export default Board;