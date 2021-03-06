import React from 'react';
import './Status.css';
import App from './App';

class FirePlace extends React.Component {
    constructor(props) {
      super(props);
      this.onSetFire = this.onSetFire.bind(this);
      this.onSnuffOut = this.onSnuffOut.bind(this);
      this.state = {isBurning: false};
    }
  
    onSetFire() {
      this.setState({isBurning: true});
    }
  
    onSnuffOut() {
      this.setState({isBurning: false});
    }
  
    render() {
      const isBurning = this.state.isBurning;
      
      let button = null;
      if(isBurning){
        button = <SnuffOutButton onClick={this.onSnuffOut} /> 
      } else {
        button = <SetFireButton onClick={this.onSetFire} />
      }
      return (
        <div>
        <App />
          <Indicator isBurning={isBurning} />
          {button}
        </div>
      );
    }
  }
  
  function SetFireMessage(props) {
    return <h3>Камін горить!</h3>;
  }
  
  function SnuffOutMessage(props) {
    return <h3>Камін не горить</h3>;
  }
  
  function Indicator(props) {
    const isBurning = props.isBurning;
    if(isBurning){
      return <SetFireMessage />;
    }
    return <SnuffOutMessage />;
  }
  
  function SetFireButton(props) {
    return (<button className="orange" onClick={props.onClick}>Запалити</button>);
  }
  
  function SnuffOutButton(props) {
    return (<button className="blue" onClick={props.onClick}>Загасити</button>);
  }
  
  export default FirePlace;
  