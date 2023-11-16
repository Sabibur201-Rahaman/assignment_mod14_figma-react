import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import TeamPage from './pages/TeamPage'
import TestimonialPage from './pages/TestimonialPage'
import ServicesPage from './pages/ServicesPage'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/testimoni' element={<TestimonialPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
