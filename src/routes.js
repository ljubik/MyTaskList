import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './components/App';

import TaskForm from './components/TaskForm';
import FirePlace from './components/Status';
// import Template3 from './components/template3';

const routes = (
    <Route >
      <Route exact path="/components/TaskForm" component={TaskForm}/>
      <Route exact path="/components" component={FirePlace}/>
      {/*<Route exact path="/sessionstate3" component={Template3}/> */}
    </Route >
)
export default routes;