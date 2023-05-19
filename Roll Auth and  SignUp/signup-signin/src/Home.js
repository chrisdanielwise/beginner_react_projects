import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './features/UserReducer'


const Home = () => {

    const users  = useSelector((state)=> state.users)
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        dispatch(deleteUser({id}))
    }


    
   

  return (
    <div className='container'>
        <h1>Crud App with JSON Server</h1>
        <Link to="/create" className="btn btn-success my-3">Create +</Link>
        <table className='border '>
            <thead>
                <tr  className='border'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr  className='border' key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                            <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Home


// const handleFilter = (event)=>{
//     const newData = records.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
// }