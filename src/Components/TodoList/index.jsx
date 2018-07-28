import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { updateTodo } from '../../Actions/todoActions';
import ToDoListPropType from '../../PropTypes/ToDoListPropType';
import CreateToDo from './CreateToDo';

class ToDoList extends Component {
  componentWillMount() {
    console.log(this.props.todos);
  }
  handleToggle(value) {
    console.log(value, this);
  }
  render() {
    return (
      <div>
        <CreateToDo />
        <List>
          {this.props.todos.map(value => (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
            >
              <Checkbox checked={value.done} tabIndex={-1} disableRipple />
              <ListItemText primary={value.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

ToDoList.propTypes = ToDoListPropType;

const mS = state => ({
  todos: state.todoReducer.todos,
});

const mD = {
  updateTodo,
};
export default connect(mS, mD)(ToDoList);
