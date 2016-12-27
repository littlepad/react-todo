import React from 'react';

export default function Todo(props) {
  return (
    <li>{props.todo}</li>
  );
}
Todo.propTypes = {
  todo: React.PropTypes.string.isRequired,
};
