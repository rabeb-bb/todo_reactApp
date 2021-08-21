import './App.css';
import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import Add from './Components/Add';

class App  extends Component {
state={
  list:["item1","item2","item3","item4"]
}
addItem=(item)=>{
  this.setState({
    list: this.state.list.concat(item),
    
  })  
  item=""    
}
deleteItem=(key)=>{
  let filteredList = this.state.list.filter((el)=>
    el != key
  )
  this.setState({
    list: filteredList
  })
}
  render() { 
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <Add addItem={this.addItem}/>
        <ToDoList list={this.state.list} />
      </div>  

    );
  }
}
 
export default App;
