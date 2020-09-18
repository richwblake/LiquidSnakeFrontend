import React from 'react';

export default (props) => {
    return(
        <div>
            {props.snakePieces.map(snakePiece => {
                return(
                    <div
                    key={} 
                    className='snake-piece' 
                    style={{top: `${snakePiece.shift()}%`, left: `${snakePiece.pop()}%`}}>

                    </div>
                )
            })}
        </div>
    )
}