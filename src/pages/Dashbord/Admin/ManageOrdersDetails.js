import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ManageOrdersDetails = ({ orders, refetch, index }) => {
  console.log(orders);
  const { userName, name, price, status } = orders;
  console.log(status);
  const handleShipped = (id) => {
    console.log(id);
    const url = `https://hostel-system.onrender.com/booking/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("This Booking is Deleted");
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        {orders.status && <span className="text-success font-bold">Paid</span>}
        {!orders.status && (
          <span className="text-success font-bold">Unpaid</span>
        )}
      </td>
      <td>
        {!orders.status && (
          <button
            onClick={() => handleShipped(orders._id)}
            className="btn btn-xs bg-cyan-400 border-0 text-white"
          >
            Pending
          </button>
        )}
        {orders.status && (
          <span className="text-cyan-400 font-bold">Success</span>
        )}
      </td>
      <ToastContainer />
    </tr>
  );
};

export default ManageOrdersDetails;
