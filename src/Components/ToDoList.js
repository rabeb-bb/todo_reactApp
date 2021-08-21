import React from 'react'
import"./Todolist.css"

const ToDoList = ({list, deleteItem}) => {
    return (
        <div className="list">
            {list.map((el,i)=>{ 
               return <div className="listItem">
                        <li key={i}>{el}</li>
                        <button onClick={deleteItem}>delete</button>
                    </div>
            })}
        </div>
    )
}

export default ToDoList
