import React from 'react';

export default props => {
    return(
        <div className='name-input-field'>
            <form onSubmit={props.handleSubmit}>
                <label>Name: </label>
                <input type='text' value={props.nameValue.toUpperCase()} onChange={(event) => props.handleChange(event)}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}