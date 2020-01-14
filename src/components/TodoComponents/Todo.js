import React from 'react';

const Todo = props => {
    console.log(props);
    return(
        <div>
            <p>{props.item.task}</p>
        </div>
    )
};

export default Todo;