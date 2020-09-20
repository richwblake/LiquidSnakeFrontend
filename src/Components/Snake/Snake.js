import React from 'react';

export default (props) => {
    return(
        <div>
            {props.snakePieces.map((snakePiece, index) => {
                const style = {
                    left: `${snakePiece[0]}%`,
                    top: `${snakePiece[1]}%`
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