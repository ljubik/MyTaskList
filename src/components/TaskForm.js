import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SubTaskAdd from './SubTaskAdd';
import T from 'prop-types';

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
        
      };
      this.input = React.createRef();
      this.handleSubTaskSubmit = this.handleSubTaskSubmit.bind(this);//bind треба обовязково робити
      this.handleRemoveShareholder = this.handleRemoveShareholder.bind(this);
      this.handleRemoveSubTask = this.handleRemoveSubTask.bind(this);
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
      this.setState({ 
        taskList: this.state.taskList.filter
        ((s, sidx) => idx !== sidx) });
    }

    handleRemoveSubTask = (idx) => () => {
      const arr = this.state.taskList;
      arr.slice(idx, 1);
      this.setState({taskList:arr});

      // if(this.state.sub.isChecked !== false) {
      //   console.log("pracue", this.state.taskList)

      //   this.setState({ 
      //     taskList: this.state.taskList.filter
      //     ((s, sidx) => idx !== sidx) });
      // }
      
      console.log("ne pracue", this.state.taskList)
    }

      



    // handleRemoveShareholder = (idx) => () => {
    //   const task = this.state.taskList[taskIndex];
    //   console.log("ce nase udalenie", this.state.shareholders)
      
    //   this.setState({ 
    //     shareholders: this.state.shareholders.filter((i) => i.idx !== idx) });
    // }


    // handleRemoveShareholder(sub, taskIndex, subTaskIndex){
    //   console.log('ce nase udalenie', this.state.isChecked);
    //   //sub.isChecked = !sub.isChecked;
    //   const delTask = this.state.taskList[taskIndex];

    //   delTask.shift(taskIndex);
    //   this.setState({taskList:this.state.taskList});
    // }
    
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
    checkboxChange(sub, taskIndex, subTaskIndex){
      console.log('is checked', this.state.isChecked);
      sub.isChecked = !sub.isChecked;
      const task = this.state.taskList[taskIndex];
      task[subTaskIndex] = sub;
      this.setState({taskList:this.state.taskList});
    }

    render() {   
      console.log("Log from start", this.state); 
      const { taskList } = this.state;
      //const { isChecked } = this.state;
      
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
                onClick={this.handleRemoveSubTask(idx)} 
                className="small">Видалити складові завдання</button>
                </li>))
              }
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
TaskForm.propTypes = {
  name: T.string,
  taskList: T.array,
  onClick: T.func,
  isChecked: T.bool
}

export default TaskForm;