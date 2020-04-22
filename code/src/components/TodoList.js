import React from "react"
import styled from 'styled-components'
import { TodoItem } from "./TodoItem.js"
import { TodoInput } from "./TodoInput.js"
import { TodoSummary } from "./TodoSummary.js"
import { ClearButton } from "./ClearButton"
import { useSelector } from "react-redux"

const TodoListContainer = styled.section`
display: flex;
flex-direction: column;
font-family: 'Work Sans', sans-serif;
`
const InputContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
min-height: 100vh;
padding: 4% 8%;

@media (min-width: 668px) {
  padding: 5% 20%;
}

@media (min-width: 1024px) {
  padding: 5% 30%;
}
`

export const TodoList = () => {

  // Gets information about todo list from the store
  const list = useSelector(store => store.todos.list)

  return (
    <TodoListContainer>
      <TodoSummary />
      <InputContainer>
        <TodoInput />
        {list.items.map((item, index) => (<TodoItem itemIndex={index}></TodoItem>))}
        <ClearButton />
      </InputContainer>
    </TodoListContainer>
  )
}