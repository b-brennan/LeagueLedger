import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'


function App() {

  // Setting up page routing with React Router
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
  )
}

export default App
