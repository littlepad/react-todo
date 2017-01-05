import React from 'react';
import ReactDOM from 'react-dom';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const text = ReactDOM.findDOMNode(this.refs.todo).value.trim();
    if (text) this.props.addTodo(text);
    ReactDOM.findDOMNode(this.refs.todo).value = '';
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input your task" ref="todo" />
        <button onClick={this.addTodo}>add</button>
      </div>
    );
  }
}
InputForm.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
};
