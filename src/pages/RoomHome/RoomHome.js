import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomHome = () => {

    const [room, setRoom] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/room')
            .then(res => res.json())
            .then(data => setRoom(data))
    }, [])

    const navigate = useNavigate()
    const handleBookNow = (id) => {
        navigate(`/room/${id}`)
    }
    return (
        <div>
            <>
                <div className="">
                    <h1 className='text-3xl text-gray-100 font-bold mt-10'>Our Room Service</h1>
                    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-8">
                        {
                            room.map(item => (
                                <div class="card w-96 bg-base-100 shadow-xl mb-10">
                                    <figure class="px-10 pt-10">
                                        <img src={item.img} alt="Shoes" class="rounded-xl w-72 h-72" />
                                    </figure>
                                    <div class="card-body items-center text-center">
                                        <h2 class="card-title">{item.name}</h2>
                                        <p>${item.price}</p>
                                        <div class="card-actions">
                                            <button onClick={() => handleBookNow(item._id)} class="btn btn-primary">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        </div>
    );
};

export default RoomHome;