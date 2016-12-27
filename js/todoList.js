import React from 'react';
import List from './list';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['todo1', 'todo2', 'todo3'],
    };
  }

  render() {
    return (
      <List todos={this.state.todos} />
    );
  }
}
