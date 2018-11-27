import React from 'react';

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
          {this.state.isDangerAlertShowed ? 
            <DangerAlert text={'Внимание! В приложении возникли некоторые проблемы!'} /> : null}
          <button onClick={this.toggleDangerAlert}>
            {this.state.isDangerAlertShowed ? 'Скрыть' : 'Показать'}
          </button>
        </div>
      );
    }
  }
  export default ShowHide;
  