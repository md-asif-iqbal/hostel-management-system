import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutFormA from './CheckoutFormA';
import { signOut } from 'firebase/auth';
import Loading from '../shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
const stripePromise = loadStripe(
    "pk_test_51LXS98B5Y3AeAE8iNY0Hgf4QUbKwQQVuUk1NqhUhbNZ1UhjYvdE5UJw3DnEJBLmlWBgFqKIjfXEnVZujomnNCAyo00kHESTAcf"
);
const MyBooking = () => {
    // const [myOrders, setmyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [paymentData, setPaymentData] = useState({});
    const [deletes , setDeletes] = useState(null);
    const id = deletes?._id;
    console.log(id);
    const handleCancel = () =>{
        const url =`http://localhost:8000/purchase/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            toast('Your Order is Cenceled');
            refetch()
            
        })

    }
    const handlePayment = (item) => {
        console.log(item)
        setPaymentData(item)
    }

    
    const navigate = useNavigate()
    const email = user?.email;
    const url = `http://localhost:8000/myitems?email=${email}`;
    const { data: myOrders, isLoading , refetch } = useQuery(['orders'], () => fetch(url ,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json();
    }));
    if(isLoading){
        return<Loading></Loading>
    }
    const total = myOrders?.reduce((accumulator, object) => {
        return accumulator + object?.price;
    }, 0);

    return (
        <div className="">
            <div className="mt-10 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

                <div className="flex justify-start item-start space-y-2 flex-col ">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-white">Order #99398</h1>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start bg--primary-content px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full font-mono">
                            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-white font-mono mb-4">Customer’s Cart</p>


                            {
                                myOrders?.map((item) => (<div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-2 w-full mb-5">
                                    <div className="w-full md:w-40">
                                        <img className="w-full hidden md:block rounded" src={item.img} alt="dress" />
                                    </div>
                                    <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                                        <div className="w-full flex flex-col justify-start items-start space-y-2">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white ">{item.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-white">
                                                    <span className="text-gray-500">Price: </span> {item.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lg:flex justify-between items-center  mx-auto lg:space-x-8  w-full">
                                            {
                                                item?.status ?
                                                    < p className="text-base xl:text-lg leading-6 text-white">  <button className="btn btn-primary text-white" >{item.status}</button></p> :
                                                    < p className="text-base xl:text-lg  leading-6 text-white">  <label htmlFor="my-modal-6" className="btn modal-button btn-primary text-white" onClick={() => handlePayment(item)}>Pay</label></p>

                                            }


                                            <p className="text-base xl:text-lg font-semibold leading-6 text-white">${item.price}</p>

                                            {
                                                item?.status ?
                                                    " " :
                                                    <p className="text-base xl:text-lg  leading-6 text-white"> <label  className=" uppercase btn  text-white cursor-pointer btn-primary" onClick={() => setDeletes(item)} htmlFor="delete-confirm-modal" >Cancel</label>
                                                    </p>
                                            }
                                            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                <img src={deletes?.img} />
                                                </div>
                                            </div>
                                <h3 className="font-bold text-lg"> Are You sure delete {deletes?.name} this item!</h3>
                                <div className="modal-action">
                                    <label htmlFor="delete-confirm-modal" className="btn bg-red-500" onClick={() =>handleCancel()}>Confirm</label>
                                    <label htmlFor="delete-confirm-modal" className="btn bg-blue-600">withdrow</label>
                                </div>
                            </div>
                        </div>
                                        </div>
                                    </div>

                                </div>))
                            }
                        </div>
                        <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg--primary-content space-y-6   ">
                                <h3 className="text-xl font-semibold leading-5 text-white">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-white">Subtotal</p>
                                        <p className="text-base leading-4 text-white">${total}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg--primary-content space-y-6  font-mono">
                                <h3 className="text-xl font-semibold leading-5 text-white" >You Are Ordering {myOrders?.length} Service</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div className="w-8 h-8">
                                            <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 font-semibold text-white">
                                                Your Order
                                                <br />
                                                <span className="font-normal text-white">Total Amount </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 text-white">${total}</p>
                                </div>
                                <div className="w-full flex  justify-center items-center">
                                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle">
                                        <div className="bg-gray-100 modal-box relative">
                                            <label htmlFor="my-modal-6" className="btn-circle  btn-sm  absolute text-2xl right-2 top-3">✕</label>
                                            <div className="">
                                                <div className="flex flex-col ">
                                                    <h1 className="font-bold capitalize text-3xl my-4 text-rose-600">Make a Payment</h1>
                                                </div>
                                                <div className="card-body text-rose-600">
                                                    <Elements stripe={stripePromise}>
                                                        <CheckoutFormA paymentData={paymentData} />
                                                    </Elements>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg--primary-content w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                        <h3 className="text-xl font-semibold leading-5 text-white">Customer</h3>
                        <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-primary">
                                    <img className="w-20 rounded-[50%]" src={user?.photoURL} alt="avatar" />
                                    <div className=" flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base font-semibold leading-4 text-left text-white">{user?.displayName}</p>
                                    </div>
                                </div>

                                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-primary w-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#11DEDE" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 7L12 13L21 7" stroke="#11DEDE" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="cursor-pointer text-sm leading-5 text-white">{user?.email}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div >
    );
};

export default MyBooking;