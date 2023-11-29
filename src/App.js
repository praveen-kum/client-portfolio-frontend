import logo from './logo.svg';
import { Suspense, useEffect, useState } from "react";
import { BarLoader, DotLoader, RingLoader, SyncLoader } from "react-spinners";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from './Home/Home';
import AdminHome from './Admin/AdminHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Admin/AdminLogin';

function App() {
 const[admin,setAdmin]=useState(false)

  useEffect(() => {
    Aos.init(2000);
  }, [])
  const [loading, setLoading] = useState(true);
  function change(data) {
    { console.log(data, 'from app') }
    setAdmin(data)
    console.log(admin)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const doit = <Login change={change} />
  return (
  
       <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center ">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <RingLoader color="#36d7b7" height={4}/>
        </div>
      ) : (
        // admin?<AdminHome/>:<Home admin={setAdmin}/>
      
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={admin?<AdminHome />:doit}/>
      </Routes>
     )}
    </Suspense>

  );
}

export default App;
