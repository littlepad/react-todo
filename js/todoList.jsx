import React from 'react';
import List from './list';
import InputForm from './inputForm';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.setDone = this.setDone.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
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
    this.saveToLocalStorage();
  }

  getFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem('react-todo'));
    if (!data) data = [];
    this.setState({
      todos: data,
    });
  }

  saveToLocalStorage() {
    localStorage.clear();
    localStorage.setItem('react-todo', JSON.stringify(this.state.todos));
  }

  addTodo(txt) {
    const id = new Date().getTime().toString();
    const isDone = false;
    const text = txt;
    const tmpTodo = { id, isDone, text };
    const tmpTodos = this.state.todos;
    tmpTodos.push(tmpTodo);
    this.setState({ todos: tmpTodos });
    this.saveToLocalStorage();
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
