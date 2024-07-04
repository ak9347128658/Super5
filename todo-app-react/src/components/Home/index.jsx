import React,{useState,useEffect} from 'react';
import './Home.css'

function Home({title,description}) {
  console.log(description);
  const [todo,setTodo] = useState([]);

  const addTodo = () => {
     const tododata = document.querySelector('#todoinput').value;
     setTodo([...todo,tododata]);
      document.querySelector('#todoinput').value = '';
     // todo = [todo1,todo2,todo3,todo4,todo5]
    //            0    1     2     3     4
  }

  useEffect(()=>{
   console.log(todo);
  }
  ,[todo]);

  const deletetodobyindex = (index) => {
    const newtodo = todo.filter((item,myindex)=>{
          return myindex !== index;
    })
    setTodo(newtodo);
  }
 
    return (
        <div className='todocontainer'>
            <div className='todoinputs'>
               <h1>Todo App</h1>
               <h3>Add Your Todo's below</h3>
                <input id='todoinput' type='text' placeholder='Add Your Todo' />
                <button onClick={addTodo} >Add Todo</button>
            </div>
            <div className='todolist'>
                  <h1>All Todo's</h1>         
                 <div className='todoitems'>
                    {todo.map((item,index)=>{
                        return( 
                        <div key={index} className='todoitem' >
                            <h3>{item}</h3>
                            <button onClick={()=>{deletetodobyindex(index)}}>Delete</button>  
                        </div>
                        );
                    })}   
                    
                 </div>
            </div>
        </div>
    );
}

export default Home;