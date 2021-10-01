// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import {AddTodo} from './MyComponents/AddTodo'
import React,{useState} from 'react';
import {About} from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const onDelete = (todo)=>{
    todoSet(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  let list_of_todo=[]
  let srno=1;
  for(let i=1;i<localStorage.length+1;i++){
    list_of_todo.push(JSON.parse(localStorage[i]));
  }
  const [todos,todoSet]=useState(list_of_todo);
  const addtodo=(title,desc)=>{
    if(todos.length!==0){
      srno=todos[todos.length-1].srno+1;
    }
    const mytodo={
      srno:srno,
      title:title,
      desc:desc
    }
    localStorage.setItem(`${mytodo.srno}`,JSON.stringify(mytodo));
    todoSet([...todos,mytodo]);
  }
  return (
    // this return stat needs to return something which is packed .
    <Router>
    <Header title='My ToDolist' search_bar={false}/>
    <Switch>
      <Route exact path="/" render={()=>{
        return (
          <>
      <AddTodo addtodo={addtodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    </>
        );
      }}>
      </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    /* <div>
      Hey Omkar Nice to meet you .
    </div> */
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <div>{`Hey omkar ${4+1}`+
    //     variabley}</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );

}

export default App;
