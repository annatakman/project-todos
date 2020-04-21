import React from "react";
import { Provider } from "react-redux"
import { createStore, combineReducers } from "@reduxjs/toolkit"
import { TodoList } from "../components/TodoList";
import { todos } from "../reducers/todos"

//Tells redux about our reducers
const reducer = combineReducers({ todos: todos.reducer })

//Retrieves existing state from localstorage if it exists
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

//Creates store using our reducers and retrieved state

const store = createStore(reducer, persistedState)

// Tells store to persist the state in localstorage after every action
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList></TodoList>
      </main>
    </Provider>)
}