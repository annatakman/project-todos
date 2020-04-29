import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"

const Form = styled.form`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

    input {
      font-size: 18px;
      width: 50%;
      height: 44px;
      border: 1px solid #535c68;
      border-radius: 6px;
      font-family: 'Work Sans', sans-serif;
    }

    button {
      padding: 12px;
      margin: 6px; 
      font-size: 18px;
      border: 1px solid #535c68;
      border-radius: 6px;
      background: #f5f6fa;
      font-family: 'Work Sans', sans-serif;
    }

    @media (min-width: 668px) {
      input {
        width: 60%;
      }
    }
`

export const TodoInput = () => {
  const dispatch = useDispatch()

  //State for input from text field
  const [inputValue, setInputValue] = useState("")

  //Handle submit function to dispatch addTodo
  const handleSubmit = event => {
    event.preventDefault()

    //Dispatches action to save new todo item
    dispatch(todos.actions.addTodo({
      description: inputValue,
      done: false
    })
    )

    //Clears the text field
    setInputValue("")
  }

  return <Form onSubmit={handleSubmit}>
    <input
      type="text"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
    ></input>
    <button
      type="submit">Add Todo</button>
  </Form>
}