import logo from "./logo.svg";
import "./App.css";
import Footer from "./pages/shared/Footer/Footer";
import NavBar from "./pages/shared/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Banner from "./pages/Banner/Banner";
import AllRoomDetails from "./pages/AllRoomDetails/AllRoomDetails";
import FoodsB from "./pages/FoodsB/FoodsB";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";

import CheckOut from "./pages/RoomHome/CheckOut";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoodDetails from "./pages/FoodsB/FoodDetails";
import RoomNav from "./pages/AllRoomDetails/RoomNav";
import AllRoom from "./pages/AllRoomDetails/AllRoom";
import SingleRoom from "./pages/AllRoomDetails/SingleRoom";
import DoubleRoom from "./pages/AllRoomDetails/DoubleRoom";
import MultipleRoom from "./pages/AllRoomDetails/MultipleRoom";
import Dashbord from "./pages/Dashbord/Dashbord";
import MyProfile from "./pages/Dashbord/MyProfile";
import MyBooking from "./pages/Dashbord/MyBooking";
import MyMeals from "./pages/Dashbord/MyMeals";
import SignUp from "./pages/Login_SignUp/SignUp";
import Login from "./pages/Login_SignUp/Login";
import RequireAuth from "./pages/Login_SignUp/RequireAuth";
import AddRoom from "./pages/Dashbord/Admin/AddRoom";
import ManageOrder from "./pages/Dashbord/Admin/ManageOrder";
import ManageRoom from "./pages/Dashbord/Admin/ManageRoom";
function App() {
  return (
    <div className="App bg-slate-800">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/roomdetails" element={<RoomNav />}>
          <Route index element={<AllRoom />}></Route>
          <Route path="single" element={<SingleRoom />}></Route>
          <Route path="double" element={<DoubleRoom />}></Route>
          <Route path="multiple" element={<MultipleRoom />}></Route>
        </Route>
        <Route
          path="/dashbord"
          element={
            <RequireAuth>
              <Dashbord />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="Mybooking" element={<MyBooking />}></Route>
          <Route path="myMeals" element={<MyMeals />}></Route>
          <Route path="addRoom" element={<AddRoom />}></Route>
          <Route path="manageOrders" element={<ManageOrder />}></Route>
          <Route path="manageRooms" element={<ManageRoom />}></Route>
        </Route>
        <Route
          path="/room/:id"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="/fooddetails" element={<FoodsB />}></Route>
        <Route
          path="/foods/:id"
          element={
            <RequireAuth>
              <FoodDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
