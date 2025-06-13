import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


function App() {
   
  const [todos,setTodos]=useState([]);
  // todos means list of all todos , todo means a single todo

  //---------------- now add the functionality

  const addTodo=(todo)=>{
     // take all the old todos , create a new array inside this put all the old todos and also put the new one (need to make the newone)
      
     setTodos((oldTodos)=>[{id:Date.now(),...todo},...oldTodos])
  }

  const updateTodo=(id,todo)=>{

      // take all the todos and check any one match with my current id , if yes then update 
      setTodos((oldTodos) =>
        oldTodos.map((oldTodo) =>
          oldTodo.id === id ? { ...oldTodo, ...todo } : oldTodo
        )
      );
  }


  const deleteTodo=(id)=>{
       // logic, create a new array , inside this put all the todos that not match with my current id, so that delelted todo will not get insert into the new array 

       setTodos((oldTodos) => oldTodos.filter((oldTodo) => oldTodo.id !== id));
  }


  const toggleComplete=(id)=>{
           // logic - only need to toogle the completed value , remaining all stay same as it is , if the id will match 

           setTodos((oldTodos) =>
             oldTodos.map((oldTodo) =>
               oldTodo.id === id
                 ? { ...oldTodo, completed: !oldTodo.completed }
                 : oldTodo
             )
           );
  }

  
  // initially when my web page is load first time , need to display all the existing todos (which we will get from the local storage , use getItem ton get the values and use SetItem to set the values )

  useEffect(()=>{
       const todos=JSON.parse(localStorage.getItem("todos"));   // let call it todos
       
       // set the values if todos exist 

       if(todos && todos.length > 0) {
             setTodos(todos);
       }


  },[])

  // when todos add , or update or remove then we need to add it inside the locale storage 

  useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])




  return (
    <Todoprovider  value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
             <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App


// step-1 need to wrap tudoprovider so that i cann access all the functionality

// step-2 write all the functionality 

// step-3  - locale storage of browser - need to store in it , so that when i refresh, reload the webpage our content will not get vanish - in locale storage valus are store in the form of srting
