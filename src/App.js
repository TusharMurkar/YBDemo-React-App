import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import MyComponent from './Components/ApiCall';
import React, { useState } from 'react';


function App() {

  const onDelete = (todo) =>{
    // console.log('Delete This',todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))


    
  }

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Wake Up',
      desc: 'Wake up early morning for workout'
    },{
      id: 2,
      name: 'Bath',
      desc: 'Go to bathroom and take a shower to clean yourself'
    },{
      id: 3,
      name: 'Have Breakfast',
      desc: 'Then have a breakfast so you can start your work'
    }
  ]);

  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
