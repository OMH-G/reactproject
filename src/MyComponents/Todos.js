import React from 'react'
import {Todo} from './Todo'
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 >ToDolist</h3>
            {props.todos.length===0?"Nothing is here":
            props.todos.map((i)=>{
            return <Todo todo={i} key={i.srno} onDelete={props.onDelete}/>
            })
        }
            
            
        </div>
    )
}
