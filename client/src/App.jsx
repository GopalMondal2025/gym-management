import './App.css'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react'
function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    let isLogedIn = sessionStorage.getItem("isLogin");
    if (isLogedIn) {
      setIsLogin(true)
      navigate('/dashboard')

    }
  }, [])
  return (
    <>
      <div className="">
        {
          isLogin &&
          <Sidebar />
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div >
    </>
  )
}

export default App
