import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const FoodDetails = () => {

    const [order, setOrder] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:8000/foods/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [id]);

    const [user] = useAuthState(auth)
    const confirmBooking = () => {
        const booking = {
            userName: user?.displayName,
            email: user?.email,
            name: order.name,
            img: order.image,
            price: order.price,
            categori: order.categori
        };
        fetch("http://localhost:8000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Your Order is Complete")
                navigate(`/`)
                console.log(result)
            });
    }
    console.log(order)
    const navigate = useNavigate()
    return (
        <div className="w-10/12 mx-auto mb-20">
            <div>
                <button
                    className="btn btn-primary text-white capitalize text-lg mb-4 mt-[-40px]"
                    onClick={() => navigate(-1)}
                >
                    &#x2190; Back
                </button>
            </div>
            <h1 className="text-4xl font-bold text-center text-white mb-20">
                Please <span className="border-b-4 border-primary">Order</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <img src={order.image} alt="" />
                </div>
                <div>
                    <div className="text-secondary">
                        <h1 className="text-4xl font-semibold pt-2 text-white">
                            {order.name}
                        </h1>
                        <p className="text-2xl font-semibold text-white pt-2">Price: ${order.price}</p>
                        <p className="text-xl font-semibold text-white py-2">
                            Categories: {order.categori}
                        </p>
                        <p className='text-white'>{order.discription}</p>
                        <p>
                            <span className="text-xl mr-5 text-primary font-bold">
                                #{order.items}
                            </span>
                            <span className="text-xl mr-2 text-primary font-bold">#Food</span>
                        </p>
                        <button onClick={() => confirmBooking(order._id)} className='btn btn-primary mt-10'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;