import './App.css'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Member from './pages/Member/Members'
import MemberDetail from './pages/Member/MemberDetail'
import AddMembership from './pages/Member/AddMembership'
import GeneralUser from './pages/GeneralUser/GeneralUser'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react'

function App() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem("isLogin") === "true";
    setIsLogin(loggedInStatus);

    if (loggedInStatus && location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [navigate, location.pathname]);

  return (
    <div className="flex min-h-screen w-full">
      {isLogin && <Sidebar />}

      {/* Main Content Area */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Member />} />
          <Route path='/members/:id' element={<MemberDetail/>}/>
          <Route path='/members/add' element={<AddMembership/>}/>
          <Route path="/dashboard/general-user" element={<GeneralUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

