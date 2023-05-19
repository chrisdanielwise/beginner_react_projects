import { createSlice } from "@reduxjs/toolkit"
import { userList } from "./userList"


const UserReducer = createSlice({
 name: "user",
 initialState:userList,
 reducers:{
    addUser: (state,action) =>{
       state.push(action.payload)
    },
    updateUser: (state,action)=>{
        const {id , name, email} = action.payload
        const updateUser = state.find((user) => user.id === Number(id))
        if(updateUser){
            updateUser.name = name
            updateUser.email = email
        }
    },
    deleteUser: (state,action)=>{
        const {id} = action.payload
       return state = state.filter(notUser=> notUser.id !== id)
 }
} 
})
export const {addUser,updateUser,deleteUser} = UserReducer.actions
export default UserReducer.reducer
