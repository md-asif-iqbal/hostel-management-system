import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import ManageOrdersDetails from './ManageOrdersDetails';


const ManageOrder = () => {
    const [admin, setAdmin] = useState(false);
    const url = `http://localhost:8000/booking`;

    const { data, isLoading , refetch } = useQuery(['allorders'], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
console.log(data);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl">All Orders: {data.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Room & Food Name</th>
                        <th>Price</th>
                        <th>Pay</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map((orders , index)=><ManageOrdersDetails
                       key={orders._id}
                       orders={orders}
                       index={index}
                       refetch={refetch}
                       ></ManageOrdersDetails>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageOrder;