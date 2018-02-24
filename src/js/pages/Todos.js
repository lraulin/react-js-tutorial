import React, { Component } from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class Todos extends Component {
  constructor() {
    super()
    this.getTodos = this.getTodos.bind(this)
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on('change', this.getTodos);
    console.log(TodoStore.listenerCount('change'));
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo(e) {
    TodoActions.createTodo(Date.now());
  }

  reloadTodos() {
    TodoActions.reloadTodos()
  }

  render() {
    const {todos} = this.state;
    const TodoComponents = todos.map((todo) => <Todo key={todo.id} {...todo} />)

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <input />
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    )
  }
}
