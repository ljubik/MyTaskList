import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import routes from '../routes';


const Products = ({match}) => (
<div>
  <ul>
    <b>Produkty</b>
  </ul>
</div>
);

class App extends React.Component {
  render() {
     
  return (
    
      // <BrowserRouter>
      <div>
        <ul>
        <Link to="/"><p>HOME</p></Link>
        <Link to="/components/TaskForm"><p>TaskForm</p></Link>
        <Link to="/components/FirePlace"><p>FirePlace</p></Link>
        <Link to="/components/ShowHide"><p>ShowHide</p></Link>
        <Link to="/components/CheckArr"><p>CheckArr</p></Link>
        </ul>  
        {/* <Route path="{routes.TaskForm}" component={TaskForm} />
        <Route path="./Products" component={Products} />   */}
      </div>
      // </BrowserRouter>
           
      
  );
  }
}
 
export default App;