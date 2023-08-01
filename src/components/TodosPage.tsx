import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IToDo } from '../types/types'
import List from './List'
import ToDoItem from './ToDoItem'

const TodosPage:FC = () => {
  const [todos, setTodos] = useState<IToDo[]>([])
  useEffect(()=>{
    fetchTodos()
  }, [])
  async function fetchTodos() {
    try {
      const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div>
        <List
        items={todos}
        renderItem={(todo:IToDo)=> <ToDoItem todo={todo} key={todo.id} />}
        />  
    </div>
  )
}

export default TodosPage