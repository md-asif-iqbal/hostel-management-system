import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CheckOut = () => {

    const [roomId, setRoomId] = useState([])
    const { id } = useParams()
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:8000/room/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRoomId(data))
    }, [id])

    console.log(roomId);

    const navigate = useNavigate()
    const confirmBooking = () => {
        const booking = {
            userName: user?.displayName,
            email: user?.email,
            name: roomId.name,
            img: roomId.img,
            price: roomId.price,
            categori: roomId.gender,
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
            <div >
                <img src={roomId.img} className="w-3/4 rounded" alt="" />
            </div>
            <div>
                <div className="text-secondary   text-start">
                    <h1 className="text-4xl font-semibold pt-2 text-white">
                        {roomId.room}
                    </h1>
                    <p className="text-sm font-semibold text-white pt-2">Type: {roomId.type}</p>
                    <p className="text-sm  text-white pt-2">Gender: {roomId.gender}</p>
                    <p className="text-sm  text-white pt-2">Details: {roomId.details}</p>
                    <p className="text-sm  text-white pt-2">Price: {roomId.price}</p>
                    <button onClick={confirmBooking} className='btn btn-primary mt-10'>Book Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CheckOut;