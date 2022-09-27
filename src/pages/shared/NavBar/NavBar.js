import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from "../../../image/logo.png"
import auth from '../../../firebase.init';
const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () =>{
    signOut(auth);
     navigate('/signin')
  
 
  }
  console.log(user);
  return (
    <div>
      <header className="border-b border-gray-100 bg-gray-200">
        <div className="flex items-center sticky top-0 z-100 justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img className="w-1/2 opacity-70 mt-6" src={logo} alt=""/>
          </div>

          <div className="flex items-center justify-end flex-1">
            <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-10 lg:flex">
              <Link
                to="/home"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                Home
              </Link>

              <Link
                to="/roomdetails"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                Room
              </Link>
              <Link
                to="/fooddetails"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                Food
              </Link>

              <Link
                to="/aboutus"
                className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >
                About Us
              </Link>

              
            </nav>

            <div className="flex items-center ml-8">
              <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
                

                <span>
                  <div
                    
                    className="block dropdown z-50 relative dropdown-end p-6 border-b-4 border-transparent hover:border-red-700"
                  >
                    <label tabindex="0" class="">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    </label>
                    <ul tabindex="0" class="dropdown-content menu mt-6 p-2 absolute shadow bg-base-100 rounded-box w-52">
                    {
                      user? <li><Link to="/dashbord">DashBoard</Link></li> :""
                    }
                    {
                      user? <li> <button onClick={logout}>Log Out</button> </li> :
                      <li> <Link to="/signin">Sign In</Link> </li>
                    }
    
  </ul>

                    <span className="sr-only"> Account </span>
                  </div>
                </span>

                
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
