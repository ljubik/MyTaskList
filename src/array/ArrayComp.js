import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class myArr {
    constructor(props) {
      this.input = props.staticArr || [];

    }

} 

// localStorage.setItem('myKey', 'myValue');
var staticArr = [];
//var add = 'test';
var countAdd = 0;
var countRem = 0;



class ArrayComp extends React.Component{
    constructor(props) {
        super(props);
        this.myArray = {
            valueArray: [],
        };
        this.input = React.createRef();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
      }
      
//Додавання в даних масив 
handleFormSubmit() {
    debugger;
        // add = this.input.current.value;
        
        // staticArr.push(add);
        
        // console.log('miy handle submit', add);
        
}

 
handleAdd() {

    countAdd = countAdd+1;
    staticArr.push(countAdd);
    console.log(staticArr);
    // try {
        localStorage.setItem('user', '{countAdd}');
    //   } catch (e) {
    //     if (e == this.QUOTA_EXCEEDED_ERR) {
    //      alert('перевищено ліміт додавання');
    //     }
    //   }
}

handleRemove(){
    
    countRem = countRem-1;
    staticArr.splice(countRem, 1);
    console.log(staticArr);
    localStorage.removeItem("myKey");
    console.log('Local store remove', localStorage);
}

handleLocal() {
    var localValue = localStorage.getItem('myKey');
    var obj = {
        item1: 1,
        item2: [123, "two", 3.0],
        item3:"hello"
    };
   
   console.log(localStorage.getItem);
}

    render() {
        
        return (
            <div className="Container">
            <form >
            <input 
              type="text"
              ref={this.input}
              name="valueArray"
            />
            <button onClick={this.handleFormSubmit}>ADD</button>
            </form>
            

            {/* {this.staticArr.map((id, value) => (<div key={id}>{value}</div>))} */}
            {/* {this.state.staticArr.map()} */}
            <button onClick={this.handleAdd}>ADD мої статичні дані елемент {countAdd} </button>
            <button onClick={this.handleRemove}>Remove мої статичні дані елемент {countRem} </button>
            <p><button onClick={this.handleLocal}>work localStorage</button>
</p>
            {/* {console.log(this.input)} */}
            
            </div>        
        );
    }
}

export default ArrayComp;


// Завдання на LocalSotage:
// 1. створити джаваскрипт модуль storageService який буде містити дві функції setItem, getItem
// 2. Створити реакт компоненту яка на componentDidMount буде витягувати всі Таски з LocalSotage використовуючи модуль storageService і записувати їх у власний стейт
// 3. При додаванні/редагуванні нової таски LocalSotage має обновлятись
