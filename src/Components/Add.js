import React, { Component } from 'react'
import "./Add.css"

class Add extends Component {
    constructor({props, addItem}){
        super(props);
        this.state={
            item : "",

        }
    }
    handleChange=(e)=>{
        this.setState({
           item:e.target.value
        })
    }
   
    render() { 
        return (
            <div className="add">
                <input onChange={(e)=>this.handleChange(e)} value={this.state.item} type="text" ></input>
                <button onClick={()=> this.props.addItem(this.state.item)}>Add To Do</button>
                
            </div>
          );
    }
}
 
export default Add;