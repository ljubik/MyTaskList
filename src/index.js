import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, heshHistory } from 'react-router-dom';
import ArrayComp from './array/ArrayComp.js';
import App from './components/App';
import TaskForm from './components/TaskForm';
import CheckArr from './components/CheckArr';
import FirePlace from './components/Status';
import ShowHide from './components/ShowHide';





//ReactDOM.render(<TaskForm />, document.getElementById('root'));
//ReactDOM.render(<CheckArr />, document.getElementById('root'));
//ReactDOM.render(<FirePlace />, document.getElementById('root'));
//ReactDOM.render(<ShowHide />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router history="heshHistory">
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/components/TaskForm" component={TaskForm}/>
      <Route path="/components/FirePlace" component={FirePlace}/>
      <Route path="/components/ShowHide" component={ShowHide}/>
      <Route path="/components/CheckArr" component={CheckArr}/>
      <Route path="/array/ArrayComp" component={ArrayComp}/>
    </div>
  </Router>, 
document.getElementById('root'));
