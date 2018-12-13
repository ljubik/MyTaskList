import React, { Component } from "react";
import {getItem, setItem } from './storageService';

class LocalStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      demoData: [],
      testItem: ''
    };
    this.updateInputDemo = this.updateInputDemo.bind(this);
    this.addDemoItem = this.addDemoItem.bind(this);
  }
  componentDidMount() {
    const demoData = getItem('demoData');
    if(demoData) {
      this.setState({demoData: JSON.parse(demoData)})
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }
  updateInputDemo(key, value) {
    // update react state

    this.setState({ [key]: value });
  }
  addDemoItem() {
    const {demoData, testItem} = this.state;
    demoData.push(testItem);
    this.setState({demoData, testItem: ''});
    setItem('demoData', JSON.stringify(demoData));
  }
  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    const {demoData} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React LocalStorage Tutorial</h1>
        </header>
        {/*begin*/}
        <div>
          <h3>Приклад</h3>
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.testItem}
            onChange={e => this.updateInputDemo("testItem", e.target.value)}
          />
          <button
            onClick={() => this.addDemoItem()}
          >&#43; Add
          </button>
        </div>
        <div>
          <ul>
            {demoData.map((item, index ) => {
              return (
                <li key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        {/*End */}
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Add an item to the list
          <br />
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            &#43; Add
          </button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default LocalStore;