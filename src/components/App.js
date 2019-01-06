import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Link } from 'react-router-dom';


class App extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount(){
    this.setState({
      loading: false,
    })
  }
  
  render() {
    if (this.setState.loading) {
      return <h2>Loading...</h2>
    }
     
  return (  
    <div className="menu">
      <nav className="navbar navbar-default" role="navigation">
        <ul className="nav-justified"> 
          <li><Link to="/" className="dropdown-toggle" data-toggle="dropdown">HOME <span className="caret"></span></Link></li>   
          <li><Link to="/components/TaskForm">TaskForm </Link></li>
          <li><Link to="/components/FirePlace">FirePlace </Link></li>
          <li><Link to="/components/ShowHide">ShowHide </Link></li>
          <li><Link to="/components/CheckArr">CheckArr </Link></li>
          <li><Link to="/array/ArrayComp">ArrayComp </Link></li>
          <li><Link to="/localstore/LocalStore">LocalStore </Link></li>
        </ul> 
      </nav> 
    </div>       
  );
  };
};
 
export default App;
