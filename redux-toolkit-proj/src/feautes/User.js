import { createSlice } from '@reduxjs/toolkit'
import {UsersData} from "../fakeData"

const userSlice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers: {
        addUser : ( state,action) => {
            
      state.value.push(action.payload)
    },
        removeUser : ( state,action) => {
          state.value = state.value.filter((user) => {
            return user.id !== action.payload.id
           })  
    },
    updateUserName: (state, action) => {
      const userToUpdate = state.value.find(user => user.id === action.payload.id)
      if (userToUpdate) {
        userToUpdate.username = action.payload.username
      }
    }    

  }
}) 
 
export const {addUser,removeUser,updateUserName} = userSlice.actions
export default userSlice.reducer
