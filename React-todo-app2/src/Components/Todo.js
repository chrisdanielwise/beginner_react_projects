import {  useContext,useState } from "react";
import { AppContext } from "../App";

const Todo = () => {

  // const context = useContext(AppContext)
  const {todoArr,setTodoArr,useSortedItems} = useContext(AppContext)

  const [input,setInput] = useState('')
  

  const addTodoItem = () =>{
    if(input){
      const todoObject = {
        // id:todoArr.length === 0 ? 1:todoArr[todoArr.length - 1].id + 1,
        id: todoArr.length + 1,
        input:input
      }    
      setTodoArr((Prev)=>{
        return [...Prev,todoObject]
      })
      setInput('')
    }else{
      alert("Input field is empty")
    }

  }

  const DeleteItems = (id) =>{
    const result = todoArr.filter((filteredArr)=>{
      return filteredArr.id !== id
    })
    setTodoArr(result) 
    const removedItems = todoArr.filter((filteredArr)=>{
     return filteredArr.id === id 
    })
    useSortedItems((prev)=>{
      return [...prev,removedItems[0]]
    })
  
  }

  return (
    <div>
      <h1>Advanced Todo App</h1>
      <div className="todo-header">
        <input type="text" value={input} placeholder='Enter you task here' onChange={(e)=>setInput(e.target.value)} />
        <button type="button" onClick={addTodoItem}>+</button>
      </div>
      <ol className="todo-list">
        {todoArr && todoArr.map((value,index)=>{
          return(
            <li key={index}> {value.input}
            <button type="button" className="delet-btn" onClick={()=>DeleteItems(value.id)}
            >x</button>
            </li>
          )
        })}
        
      </ol>
    </div>
  );
};

export default Todo;
