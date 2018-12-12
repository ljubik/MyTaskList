import React, {Component} from 'react';
import App from './App';

import { createStore } from 'redux'


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1




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
           <button 
            onClick={counter}   
           />   
        </div>)
    }
}

export default CheckArr;