import React from "react";
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoList} from './TodoList'

const defaultTodos = [
  {
    text : 'Cortar Cebolla',
    completed : true
  },
  {
    text : 'Hace magia con react',
    completed : false
  },
  {
    text : 'Llorar por cortar Cebolla',
    completed : false
  },
]

function App(props) {

  const [search,setSearch] = React.useState('')
  const [todos,setTodos] = React.useState(defaultTodos)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length
  
  let searchedTodos = []

  if(!search.length >= 1){
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
    /* todos[todoIndex] = {
      text : todos.todoIndex.text,
      completed: true,
    } */
  }

  return (
    <React.Fragment>
      <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos}
      />
    <TodoSearch 
    search = {search}
    setSearch = {setSearch}
    />
    
    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodos(todo.text)}
        />
        ))}
    </TodoList>

    <CreateTodoButton />
    
    </React.Fragment>
  );
}

export default App;
