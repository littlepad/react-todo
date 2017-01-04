import React from 'react';
import classNames from 'classnames';

export default function Todo(props) {
  function setDone() {
    props.setDone(props.id);
  }

  return (
    <li>
      {props.text}
      <button
        className={classNames({ isDone: props.isDone })}
        onClick={setDone}
      >
        done
      </button>
      {props.isDone.toString()}
    </li>
  );
}
Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired,
  setDone: React.PropTypes.func.isRequired,
};
