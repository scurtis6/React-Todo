import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        console.log(e)
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='todo'
                placeholder='add new todo here'
                value={this.state.todoText}
                onChange={this.handleChanges} 
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;