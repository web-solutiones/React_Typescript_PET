import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Card, { CardVariant } from './components/Card'
import EventsExample from './components/EventsExample'
import List from './components/List'
import TodoItem from './components/ToDoItem'
import TodosPage from './components/TodosPage'
import UserItem from './components/UserItem'
import UserItemPage from './components/UserItemPage'
import UserList from './components/UserList'
import UsersPage from './components/UsersPage'
import { IToDo, IUser } from './types/types'

const App = () => {
  
  return (
    
   <BrowserRouter>
   <div>
     <NavLink to='/users'>Пользователи</NavLink >
     <NavLink to='/todos'>Список дел</NavLink >
   </div>
   <Routes>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/todos" element={<TodosPage/>}/>
      <Route path="/users/:id" element={<UserItemPage/>}/>
      <Route path="/todos/:id" element={<UserItemPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App