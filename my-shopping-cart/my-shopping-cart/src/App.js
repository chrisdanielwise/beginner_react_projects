import './App.css';
import Nav from "./components/Nav"
import AppContextProvider from './context/AppContext';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Cart from "./pages/Cart/Cart"
import Shop from './pages/Shop/Shop';
function App() {
  return (
    <div className="App">
    <AppContextProvider>
     <Router>
      <Nav/>
     <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
    </AppContextProvider>
    
    </div>
  );
}

export default App;
