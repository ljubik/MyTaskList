import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Link } from 'react-router-dom';



const Products = ({match}) => (
<div>
  <ul>
    <b>Produkty</b>
  </ul>
</div>
);

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
    
      
      <div>
        <ul>
        <Link to="/"><p>HOME</p></Link>
        <Link to="/components/TaskForm"><p>TaskForm</p></Link>
        <Link to="/components/FirePlace"><p>FirePlace</p></Link>
        <Link to="/components/ShowHide"><p>ShowHide</p></Link>
        <Link to="/components/CheckArr"><p>CheckArr</p></Link>
        <Link to="/array/ArrayComp"><p>ArrayComp</p></Link>
        <Link to="/localstore/LocalStore"><p>LocalStore</p></Link>
        </ul>  
        
      </div>       
      
  );
  }
}
 
export default App;