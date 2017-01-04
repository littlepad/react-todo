import React from 'react';
import classNames from 'classnames';

export default function Todo(props) {
  function setDone() {
    props.setDone(props.id);
  }

  return (
    <li className={classNames({ isDone: props.isDone })}>
      {props.text}
      <button
        disabled={classNames({ isDone: props.isDone })}
        onClick={setDone}
      >
        done
      </button>
    </li>
  );
}
Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired,
  setDone: React.PropTypes.func.isRequired,
};
