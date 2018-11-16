import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SubTaskAdd from './SubTaskAdd';


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

class TaskForm extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        name: '',
        taskList: [],
        isChecked: false,
      };
      this.input = React.createRef();
      this.handleSubTaskSubmit = this.handleSubTaskSubmit.bind(this);//bind треба обовязково робити
    }
    
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
      
    }

    handleBoxChange = (event) => {
      this.setState( {isChecked: event.target.checked});
            
    }
     
    handleSubmit = (event) => {
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
        isChecked: false
      })
    }
    

    //для майбутнього стирання
    handleRemoveShareholder = (idx) => () => {
      this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }
    //Додавання в масив даних
    handleSubTaskSubmit(data) {
      console.log(data)
      const {taskId, subName, isChecked} = data;//отримуємо дані з суб таску
      const {taskList} = this.state;
      taskList[taskId].subTask.push({subName: subName, isChecked: isChecked});//додавання в масив в елемент таск ід
      //console.log(taskList, "recive dani");
      this.setState({taskList:taskList});
    }

// зміна стану чекбокс
    CheckboxChange = () => {
      console.log('is checked', this.state.isChecked);  
      this.setState(({ isChecked }) => (
        {
          isChecked: !isChecked,
          
        }
        
      ));
    }

    render() {   
      console.log("Log from start", this.state); 
      const { taskList } = this.state;
      const { isChecked } = this.state;
      
      return (
        <div className="Container">
           <div className="jumbotron">
           <h1 className ="display-3">
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
              <ul>
              <li>
              <SubTaskAdd taskId={idx} 
              btnLable="Save" 
              onSubmit={this.handleSubTaskSubmit}
              >
              
              </SubTaskAdd>
              </li>
                {task.subTask.map((sub, i) => (<li key={i}>{sub.subName}
                <input type="checkbox" 
                name="statOk" 
                value=""  
                checked={isChecked}
                onChange={this.CheckboxChange}>

                </input> </li>))}
               
              </ul>
              {/* 
              <button type="button" tabIndex="20" onClick={this.handleAddShareholder} className="small">Додати завдання</button>
              <button type="button" tabIndex="30" onClick={this.handleRemoveShareholder(idx)} className="small">Видалити завдання</button> */}
            </div>
          ))}
          </div>
        </div>
      )
    }
  }
export default TaskForm;