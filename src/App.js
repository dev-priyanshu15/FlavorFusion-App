import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeId from './components/RecipeId'
import Category from './components/Category'
import SearchElement from './components/SearchElement'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:idMeal' element={ <RecipeId />} />
      <Route path='/category/:name' element={ <Category />} />
      <Route path='/search/:searchTerm' element={ <SearchElement />} />
        </Routes>
      </Router>
    </>
  )
}

export default App