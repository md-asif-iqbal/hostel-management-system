import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashbord = () => {

    const [user] = useAuthState(auth)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col h-auto">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side mt-20 pl-10 w-72">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80  text-base-content">
                    <li className="text-secondary text-lg mb-4 w-40">
                        <NavLink to="/dashbord"> My Profile</NavLink>
                    </li>
                    <ul>
                        <li className="text-secondary text-lg mb-4 w-40">
                            <NavLink to="/dashbord/Mybooking"> My Booking </NavLink>
                    </li>
                    <li className="text-secondary text-lg mb-4 w-48">
                        <NavLink to="/dashbord/myMeals">My Meals</NavLink>
                    </li>
                    <li>
                        <div className="avatar ">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-6 mt-10">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt={ user?.displayName} className="w-12 p-0 text-primary" /> : <img src="https://i.ibb.co/rwGPsQ9/profile.jpg" alt={user?.displayName} className="w-14 text-primary" />}
                            </div>
                        </div>
                        <h1 className="text-sm ml-6 text-secondary">{user?.displayName}</h1>
                    </li>
                </ul>
            </ul>
        </div>
        </div >
    );
};

export default Dashbord;