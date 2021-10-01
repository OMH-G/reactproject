import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <div>
            <h3>Title : {todo.title}<br/>
             Desc : {todo.desc}
            </h3>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
