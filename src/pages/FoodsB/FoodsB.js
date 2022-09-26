import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseFood from '../Hooks/UseFood';
const FoodsB = () => {

	const [foods] = UseFood()
	const navigate = useNavigate()
	const handleNavigateORder = (id) => {
		navigate(`/foods/${id}`)
	}
	return (
		<div>
			<h1 className="text-4xl text-white mt-10 font-bold text-center font-mono">
				Our Food <span className="border-b-4 border-white">Menu</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-28">
				{foods.map((item) => {
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

export default FoodsB;