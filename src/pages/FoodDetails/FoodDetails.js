import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseFood from '../Hooks/UseFood';

const FoodDetails = () => {

  const [foods] = UseFood()
  const navigate = useNavigate()
	const handleNavigateORder = (id) => {
		navigate(`/foods/${id}`)
	}
    return (
        <div>
             <h1 class="text-center text-gray-100 text-4xl font-bold mt-4">Our <span class="text-rose-600">Food Details</span>  System</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-28">
				{foods.slice(0,3) .map((item) => {
					return (
						<div className="mx-auto mb-20 hover:shadow-md p-10 design hover:shadow-white first:shadow-lg first:shadow-white relative h-[480px]">
							<img className="w-60 h-60 mb-4" src={item.image} alt="" />
							<h1 className="text-center text-xl text-white font-semibold">
								{item.name}
							</h1>
							<h1 className="text-center text-xl text-white font-semibold">
								${item.price}
							</h1>
							<button
								onClick={() => handleNavigateORder(item._id)}
								className="btn btn-primary text-white text-lg mt-8 capitalize btn-outline border-2 absolute bottom-10 left-24"
							>
								Order Now
							</button>
						</div>
					);
				})}
			</div>
        </div>
    );
};

export default FoodDetails;