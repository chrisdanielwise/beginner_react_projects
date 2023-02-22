import './index.css';
import Nav from '../src/components/Nav'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Services from '../src/components/Services'
function App() {
  return (
    <BrowserRouter className="App">
      <Nav/>
      <Routes>
              <Route  path="/" element={<Home/>}></Route>
              <Route  path="/about" element={<About/>}></Route>
              <Route  path="/contact" element= {<Contact/>}></Route>
              <Route  path="/services" element= {<Services/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
