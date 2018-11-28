import React from 'react';
import App from './App';

function DangerAlert(props) {
    return (
      <h3 className="alert alert-danger">{props.text}</h3>
    );
  }
  
  class ShowHide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isDangerAlertShowed: true}
      this.toggleDangerAlert = this.toggleDangerAlert.bind(this);
    }
  
    toggleDangerAlert() {
      this.setState(prevState => ({
        isDangerAlertShowed: !prevState.isDangerAlertShowed
      }));
    }
  
    render() {
      return (
        <div>
          <App />
          {this.state.isDangerAlertShowed ? 
            <DangerAlert text={'Увага! В додатку виникла помилка'} /> : null}
          <button onClick={this.toggleDangerAlert}>
            {this.state.isDangerAlertShowed ? 'Сховати' : 'Показати'}
          </button>
        </div>
      );
    }
  }
  export default ShowHide;
  