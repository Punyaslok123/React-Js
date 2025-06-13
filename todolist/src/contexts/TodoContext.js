import React,{ useContext } from "react"

export const TodoContext=React.createContext(
    {
        todos:[
             {
                id:1,
                todo:"Todo Msg",
                completed:false,
             }   
        ],
         
        // add only functions  of the tudos which will be define in app jsx 

        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}

    }
)



// custom hook 
export const useTodo=()=>{
      return useContext(TodoContext);
}

// export provider 

export const Todoprovider=TodoContext.Provider;

// now go index.js and export all this things 