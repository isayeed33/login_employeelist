import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EmployeeList from "./components/employeelist";
import LoginForm from './components/LoginForm/LoginForm'
import Logout from './components/logout';
import Protected from './components/Protected'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router> 
          <Protected exact path="/" component={EmployeeList}></Protected>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/logout" component={Logout}></Route>
        </Router>
      </div>
    )
  }
}