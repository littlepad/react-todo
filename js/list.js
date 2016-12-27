import React from 'react';

export default function List(props) {
  const list = props.todos.map((todo, index) => <li key={index}>{todo}</li>);
  return (
    <ul>
      {list}
    </ul>
  );
}
List.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
