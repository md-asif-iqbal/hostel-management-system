import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllRoom = () => {
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
    // 
    return (
        <div className=" w-full mx-auto  grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 py-8 mt-12">
            {
                room.map(item => (
                    <div class="card w-96 bg-base-100 shadow-xl mx-14  mb-10">
                        <figure class="px-10 pt-10">
                            <img src={item.img} alt="Shoes" class="rounded-xl w-72 h-72" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{item.name} Bed</h2>
                            <p>${item.price}</p>
                            <div class="card-actions">
                                <button onClick={() => handleBookNow(item._id)} class="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllRoom;