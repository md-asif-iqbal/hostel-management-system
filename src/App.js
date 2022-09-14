import logo from './logo.svg';
import './App.css';
import Footer from './pages/shared/Footer/Footer';
import NavBar from './pages/shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Banner from './pages/Banner/Banner';
import AllRoomDetails from './pages/AllRoomDetails/AllRoomDetails';
import FoodsB from './pages/FoodsB/FoodsB';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login&SignUp/Login';
import SignUp from './pages/Login&SignUp/SignUp';
function App() {
  return (
    <div className="App bg-slate-800">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/roomdetails' element={<AllRoomDetails/>}></Route>
        <Route path='/fooddetails' element={<FoodsB/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
