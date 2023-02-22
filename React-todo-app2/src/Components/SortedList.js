import React,{useContext} from 'react'
import { AppContext } from '../App'
const SortedList = () => {
    const {sortedItems,useSortedItems} = useContext(AppContext)

    const DeleteItems = (id) =>{
        const result = sortedItems.filter((filteredArr)=>{
          return filteredArr.id !== id
        })
        useSortedItems(result)
      }
    
  return (
    <div className='sorted-list'>
      <div>
      <h1>Advanced Todo App</h1>
      <ol className="todo-list ">
        {sortedItems && sortedItems.map((value,index)=>{
          return(
            <li key={index}> {value.input} {value.id}
            <button type="button" className="delet-btn" onClick={()=>DeleteItems(value.id)}
            >x</button>
            </li>
          )
        })}
        
      </ol>
    </div>
    </div>
  )
}

export default SortedList

