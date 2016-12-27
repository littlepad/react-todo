import React from 'react';
import Todo from './todo';

export default function List(props) {
  const list = props.todos.map((todo, index) => <Todo key={index} todo={todo} />);
  return (
    <ul>
      {list}
    </ul>
  );
}
List.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
