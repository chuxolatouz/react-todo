import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodoAsync } from '../../Actions/todoActions';
import AppPropType from '../../PropTypes/AppPropType';
import logo from './logo.svg';
import ToDoList from '../TodoList';
import './index.css';

class App extends Component {
  componentWillMount() {
    this.props.getTodoAsync();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactJS To Do list by Chuxie</h1>
        </header>
        <ToDoList />
      </div>
    );
  }
}

App.propTypes = AppPropType;

const mD = {
  getTodoAsync,
};
export default connect(null, mD)(App);
