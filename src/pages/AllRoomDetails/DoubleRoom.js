import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DoubleRoom = () => {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    fetch("https://hostel-system.onrender.com/room")
      .then((res) => res.json())
      .then((data) => {
        const reamingData = data.filter((item) => {
          return item.room === "Double Bed";
        });
        setRoom(reamingData);
      });
  }, [room]);

  console.log(room);
  const navigate = useNavigate();
  const handleBookNow = (id) => {
    navigate(`/room/${id}`);
  };
  return (
    <div className="w-10/12 mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 py-8">
      {room.map((item) => (
        <div class="card w-96 bg-base-100 shadow-xl mb-10">
          <figure class="px-10 pt-10">
            <img src={item.img} alt="Shoes" class="rounded-xl w-72 h-72" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{item.room}</h2>
            <h2 class="card-title">{item.type}</h2>
            <p>{item.price}</p>
            <div class="card-actions">
              <button
                onClick={() => handleBookNow(item._id)}
                class="btn btn-primary"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoubleRoom;
