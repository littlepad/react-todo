import React from 'react';
import List from './list';
import InputForm from './inputForm';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: '00000', isDone: true, text: 'todo1' },
        { id: '11111', isDone: false, text: 'todo2' },
        { id: '22222', isDone: false, text: 'todo3' },
      ],
    };

    this.setDone = this.setDone.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  setDone(id) {
    const tmpTodos = this.state.todos.map((todo) => {
      const tmpTodo = todo;
      if (tmpTodo.id === id) {
        tmpTodo.isDone = true;
      }
      return tmpTodo;
    });
    this.setState({ todos: tmpTodos });
  }

  addTodo(text) {
    const tmpTodo = {
      id: new Date().getTime().toString(),
      isDone: false,
      text: text,
    };

    const tmpTodos = this.state.todos;
    tmpTodos.push(tmpTodo);
    this.setState({ todos: tmpTodos });
  }

  render() {
    return (
      <div>
        <List todos={this.state.todos} setDone={this.setDone} />
        <InputForm addTodo={this.addTodo} />
      </div>
    );
  }
}
