import Todo from './Components/Todo'
import Nav from './Components/Nav';
import SortedList from './Components/SortedList'
import { createContext,useState } from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"

export const AppContext = createContext()

function App() {

  const [todoArr,setTodoArr] = useState([])
  const [sortedItems,useSortedItems] = useState([])

  const value = {
    todoArr,
    setTodoArr,
    sortedItems,
    useSortedItems
  }
  
  return (
    <div className="App">
      <AppContext.Provider value={value}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/sorted" element={<SortedList/>}/>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
