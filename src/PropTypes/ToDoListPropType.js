import PropTypes from 'prop-types';

const ToDoListPropType = {
  todos: PropTypes.instanceOf(Array),
  newTodo: PropTypes.string,
};

export default ToDoListPropType;
