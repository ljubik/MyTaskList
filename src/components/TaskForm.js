import React, {Component} from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css'
import SubTaskAdd from './SubTaskAdd';
import T from 'prop-types';
import App from './App';
import {getItem, setItem, clearAll } from '../localstore/storageService';
// import SimpleStorage from "react-simple-storage";

class newTask {
  constructor(props) {
    this.name = props.name || 'Some name';
    this.subTask = props.subTask || [];
  }
} 
// Інший спосіб створити обєкт
// function newTask1(props) {
//     this.name = props.name || 'Some name';
//     this.subTask = props.subTask || [];
// } 
function _getProprety(object, key, _default) {
  if(object !== undefined && object[key] !== undefined) {
    return object[key];
  }
  return _default;
}

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      taskList: [],
      isChecked: true,
      loading: true,
        
    };
    this.input = React.createRef();
    this.handleSubTaskSubmit = this.handleSubTaskSubmit.bind(this);//bind треба обовязково робити
    this.handleRemoveShareholder = this.handleRemoveShareholder.bind(this);
    this.handleRemoveSubTask = this.handleRemoveSubTask.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
  }
  
  async componentDidMount(){
    const taskList = getItem('taskList');

    if(_.isEmpty(taskList)) {
      clearAll();
    }else {
      this.setState({taskList: JSON.parse(taskList)})
    }

    //clearAll();
      this.setState({
        loading: false,
      })
  }
    
  handleNameChange (event) {
      this.setState({ name: event.target.value });  
  }

  handleBoxChange (event) {
      this.setState( {isChecked: event.target.checked});       
  }
     
  handleSubmit (event) {
      event.preventDefault();
      const { name, taskList } = this.state;
      const task = new newTask({
        name: name,
        
      });
      taskList.push(task);
      this.input.current.value = '';
      this.setState({
        name: '',
        taskList: taskList,
        
      })
      
      setItem('taskList', JSON.stringify(taskList));

  }
    
//для стирання цілого блоку
  handleRemoveShareholder = (idx) => () => {
    this.state.taskList.splice(idx, 1);
    this.setState({taskList: this.state.taskList});
    
    // //стара реалізація через фільтр, має глюк не видаляє останній елемент  
    // this.setState({ 
    //     taskList: this.state.taskList.filter
    //     ((s, sidx) => idx !== sidx) });
    //     //const taskList = this.state.taskList;
      setItem('taskList', JSON.stringify(this.state.taskList));

  }

//для стирання одного завдання
  handleRemoveSubTask = (taskId, subTaskId, _nameKey = 'subTask' ) => () => {
    // if(!_nameKey) {
    //   _nameKey = 'subTask';
    // }
    // Ідентична логіка
    // _nameKey = _nameKey || 'subTask';

    // 1 вибираємо таску по taskId. в вибраній тасці звертаємось до масиву subTask і видаляємо з нього
    // саб таску з subTaskId
    // const _task = this.state.taskList[taskId];
    // console.log(_task);
    // const _subTask = _.get(_task, 'subTask[0].subName', []);
    // console.log(_subTask);
    this.state.taskList[taskId].subTask.splice(subTaskId, 1);
    this.setState({taskList: this.state.taskList});
    setItem('taskList', JSON.stringify(this.state.taskList));
  }


//Додавання в масив даних
  handleSubTaskSubmit(data) {
      console.log("Додавання в масив", data)
      const {taskId, subName, isChecked} = data;//отримуємо дані з суб таску
      const {taskList} = this.state;
      taskList[taskId].subTask.push({subName: subName, isChecked: isChecked});//додавання в масив в елемент таск ід
      //console.log(taskList, "recive dani");
      this.setState({taskList:taskList});
      
      setItem('taskList', JSON.stringify(taskList));
  }

// зміна стану чекбокс
  checkboxChange(sub, taskIndex, subTaskIndex){
      console.log('is checked', this.state.isChecked);
      sub.isChecked = !sub.isChecked;
      const task = this.state.taskList[taskIndex];
      //console.log('after chenge', this.state.taskList[taskIndex]);
      task[subTaskIndex] = sub;
      this.setState({taskList:this.state.taskList});
      setItem('taskList', JSON.stringify(this.state.taskList));
  }

  handleLokalStoreClear(){
    clearAll();
  }
    

  render() { 
      //Для показування завантаження при запуску
      // if (this.setState.loading) {
      //   return <h2>Loading...</h2>
      // }
      
       
      const { taskList } = this.state;
      console.log("Log from start", taskList);
      console.log("Log", _.isEmpty(taskList)); 
         
      return (
        <div className="Container">
           <App />
           <div className="jumbotron">
           <h1 className ="display-3">
           {/* <SimpleStorage parent={this} /> */}
          Список справ
           </h1>
          <form onSubmit={this.handleSubmit}>
            <h4>Назва завдання</h4>
            <input required
              type="text"
              name="taskName"
              tabIndex="1"
              placeholder="Task name"
              ref={this.input}
              onChange={this.handleNameChange}
            />
            <button>Save</button>
          </form>
          <h4>Складові завдання</h4>
        
          {taskList.map((task, idx) => (
            <div key={idx} className="shareholder">
              <h4>{task.name}</h4>
              <button 
              type="button" 
              onClick={this.handleRemoveShareholder(idx)} 
              className="small">Видалити завдання</button>
              <ul>
              <li>
                <SubTaskAdd taskId={idx} 
                btnLable="Save" 
                onSubmit={this.handleSubTaskSubmit}
                ></SubTaskAdd>
              </li>
                {task.subTask.map((sub, i) => (<li key={i}>{sub.subName}
                <input type="checkbox" 
                name="statOk" 
                value=""
                defaultChecked={sub.isChecked}
                onChange={() => this.checkboxChange(sub, idx, i)}>
                </input>
                
                <button 
                type="button" 
                onClick={this.handleRemoveSubTask(idx, i, 'name')}
                className="small">Видалити складові завдання</button>
                </li>))
              }
              </ul>
              
            </div>
          ))}
          </div>
          
          <button 
                type="button" 
                onClick={this.handleLokalStoreClear} 
                className="small">localstore clear</button>
        </div>
      )
  }
}

TaskForm.propTypes = {
  name: T.string,
  taskList: T.array,
  onClick: T.func,
  isChecked: T.bool
}

export default TaskForm;
