import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Movies from './component/Movies/Movies';
import Tvshow from './component/Tvshow/Tvshow';
import People from './component/People/People';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import Moviedetails from './component/Moviedetails/Moviedetails';
import { MediaContextProvider } from './MediaContext';
import Header from './component/Header/Header';
import Notfound from './component/Notfound/Notfound';


function App() {



  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();
useEffect(() => {
  if(localStorage.getItem('userToken')){
    getUserData();
  }
}, [])

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem('userToken'));
    setUserData(decodedToken);
  }

  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }
function ProtectedRoute({childern}) {
  if (!localStorage.getItem('userToken')) {
    return <Navigate to='/login'/>
  }else{
    return  childern
  }
}
  return (
    <div>
     
        <Navbar userData={userData} logOut={logOut} />
        <MediaContextProvider>
        <Routes>
        <Route path='/' element={<Login/>} />
          <Route path='home' element={<Home/>} />
          <Route path='movies' element={<Movies />} />
          <Route path='tvshow' element={<Tvshow />} />
          <Route path='people' element={<People />} />
          <Route path='moviedetails' element={<Moviedetails />} >
          <Route path=':id' element={<Moviedetails />}/>
          </Route>
          <Route path='Register' element={<Register />} />
          <Route path='Header' element={<Header />} />
          <Route path='login' element={<Login getuser={getUserData} />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        </MediaContextProvider>
      </div>

  
  );
}

export default App;
