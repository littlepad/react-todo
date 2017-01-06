import React from 'react';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const text = this.todo.value.trim();
    if (text) this.props.addTodo(text);
    this.todo.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input your task" ref={(node) => { this.todo = node; }} />
        <button onClick={this.addTodo}>add</button>
      </div>
    );
  }
}
InputForm.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
};
