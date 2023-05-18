import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux"
import store from "./app/store"
import { fetchPosts } from '../src/feature/post/postSlice';
import { fetchUsers } from "./feature/users/userSlice";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers())



const root = createRoot(document.getElementById("root"))


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

