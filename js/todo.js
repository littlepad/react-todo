import React from 'react';

export default function Todo(props) {
  const id = `id${props.id}`;
  return (
    <li>
      <label htmlFor={id}>
        <input type="checkbox" checked={props.isDone} id={id} /> {props.text}
      </label>
    </li>
  );
}
Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired,
};
