import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './components/TaskForm';
import { BrowserRouter } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import routes from './routes.js';
//import CheckArr from './components/CheckArr';
//import FirePlace from './components/Status';
//import ShowHide from './components/ShowHide';
import App from './components/App';




//ReactDOM.render(<BrowserRouter><TaskForm /></BrowserRouter>, document.getElementById('root'));
//ReactDOM.render(<CheckArr />, document.getElementById('root'));
//ReactDOM.render(<FirePlace />, document.getElementById('root'));
//ReactDOM.render(<ShowHide />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App  Router={routes} /></BrowserRouter>, document.getElementById('root'));
