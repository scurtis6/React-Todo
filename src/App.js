import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const list =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Vacuum',
    id: 1528817091420,
    completed: false
  },
  {
    task: 'Clean Room',
    id: 1578971354923,
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: 1578971434813,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: list
    }
  }

  toggleItem = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = () => {
    const newClearCompleted = this.state.todoList.filter(todo =>
      todo.completed !== true
      )
      this.setState({
        todoList: newClearCompleted
      });
  }
  
  render() {
    console.log('rendering...');
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
        list={this.state.todoList}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted} />
      </div>
      
    );
  }
}

export default App;
