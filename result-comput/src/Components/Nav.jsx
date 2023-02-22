import LoginPage from "./Login"
import Lecturers from "./Lecturers"
import Student from "./Student";
import {NavLink,Routes,Route} from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav className="navigaiton-bar">
      <ul className='d-row nav-list'>
        <NavLink   to="/" >
            <li className="bg-success text-white p-2">Log in</li>
            </NavLink>
        <NavLink  to="/Student" >
            <li className="bg-success text-white p-2">Student Profile</li>
            </NavLink>
        <NavLink  to="/Lecturer" >
            <li className="bg-danger text-white p-2">Lecturers Profile</li>
        </NavLink>
      </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/Student" element={<Student/>}></Route>
        <Route path="/Lecturer" element={<Lecturers/>}></Route>
      </Routes>
    </>
  )
}

export default Nav
