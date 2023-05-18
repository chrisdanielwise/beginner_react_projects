import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "../feature/users/userSlice"
import postReducer from "../feature/post/postSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer
  }
});

export default store;

