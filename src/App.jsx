import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import InternDetail from './pages/InternDetail'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intern/:id" element={<InternDetail />} />
      </Routes>
    </div>
  )
}

export default App
