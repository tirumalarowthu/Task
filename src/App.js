import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Login from './components/Login'
// import Details from './components/Details'
import Errror from './components/Error'
import { Routes, Route } from 'react-router-dom'
import CalculationPage from './components/CalculationPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<CalculationPage />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  )
}

export default App
