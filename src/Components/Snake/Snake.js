import React from 'react';

export default (props) => {
    return(
        <div>
            {props.snakePieces.map((snakePiece, index) => {
                const style = {
                    top: `${snakePiece[0]}%`,
                    left: `${snakePiece[1]}%`
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