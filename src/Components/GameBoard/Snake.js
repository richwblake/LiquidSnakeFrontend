import React from 'react';

export default (props) => {
    return(
        <div>
            {props.snakePieces.map((snakePiece, index) => {
                const style = {
                    top: `${snakePiece.shift()}%`,
                    left: `${snakePiece.pop()}%`
                }
                return(
                    <div
                    key={index} 
                    className='snake-piece' 
                    style={style}>
                    </div>
                )
            })}
        </div>
    )
}