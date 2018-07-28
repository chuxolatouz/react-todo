import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { updateTodo, createTodo } from '../../Actions/todoActions';
import CreateToDoPropType from '../../PropTypes/CreateToDoPropType';

class CreateToDo extends Component {
  submit() {
    console.log(this.props);
  }
  render() {
    const { newTodo } = this.props;
    return (
      <div>
        <TextField
          id="with-placeholder"
          label="Add new to-do"
          placeholder="Add some new task"
          margin="normal"
          value={newTodo}
          onChange={e => this.props.updateTodo({ newTodo: e.target.value })}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={() => this.props.createTodo(newTodo)}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const mS = state => ({
  newTodo: state.todoReducer.newTodo,
});

const mD = {
  updateTodo,
  createTodo,
};

CreateToDo.propTypes = CreateToDoPropType;
export default connect(mS, mD)(CreateToDo);
