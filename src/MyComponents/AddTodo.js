import React from 'react'
import { useState } from 'react';
export const AddTodo = ({addtodo}) => {
    const [title,settitle]=useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and desc should not be empty");
        }
        else{
            addtodo(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <form action="#" onSubmit={submit}>
                <h3>Create Modo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task</label>
                    <input type="text" onChange={(e)=>{settitle(e.target.value)}} value={title} className="form-control" id="title" placeholder="Some Task" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" rows="3" onChange={(e)=>{setdesc(e.target.value)}} value={desc} ></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-sm btn-outline-warning" onClick={submit}>Submit</button>
            </form>

        </div>



    )
}
