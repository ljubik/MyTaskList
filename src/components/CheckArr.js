import React, {Component} from 'react';
import App from './App';

class CheckArr extends Component {
    state = {
        isChecked: true,
    };

    CheckboxChange = () => {
        console.log('is checked', this.state.isChecked);  
        this.setState(({ isChecked }) => (
          {
            isChecked: !isChecked,
          }
          
        ));
    }

    render() {
        const { isChecked } = this.state;
        return (
        <div>
          <App />
          <input type="checkbox" 
          name="statOk" 
          value="false" 
          checked={isChecked}
          onChange={this.CheckboxChange}
          />
              
        </div>)
    }
}

export default CheckArr;