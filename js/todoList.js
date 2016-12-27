import React from 'react';
import List from './list';

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
  }

  render() {
    return (
      <List todos={this.state.todos} />
    );
  }
}
