import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
const AddRoom = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgStorageKey = "4a61042a9b5e9768554933fea17bbd17";

  const addProduct = async (data) => {
    const price = parseInt(data.price);
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgUrl = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            room: data.room,
            type: data.type,
            price: data.price,
            gender: data.gender,
            details: data.details,
            img: img,
            
          };
          fetch("http://localhost:8000/room", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.success) {
                toast.success("Congratsss your Room is added");
                reset();
              } else {
                toast.error("Sorry Your Room is not added");
              }
            });
        }
      });
  };
  return (
    <div className="border-2">
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="form-control w-full  max-w-xs mx-auto ">
          <label className="label">
            <span className="label-text">Room Name</span>
          </label>
          <input
            type="text"
            placeholder="Room Name"
            className="input input-bordered w-full max-w-xs"
            {...register("room", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input
            type="text"
            placeholder="AC or Non-AC"
            className="input -mt-10  input-bordered w-full max-w-xs"
            {...register("type", {
              required: {
                value: true,
                message: "type is require",
              },
            })}
          />
          <label className="label">
            {errors.number?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input -mt-10  input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price is require",
              },
            })}
          />
          <label className="label">
            {errors.number?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label class="leading-loose">Gender</label>
          <select
            {...register("gender", {
              required: {
                value: true,
                message: "Gender is Required",
              },
            })}
            className="select px-14 -mt-9 py-1 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Selected Gender
            </option>
            <option>Male </option>
            <option>Female</option>
          </select>
          <label className="label">
            {errors.number?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        {/* Review Text Area */}
        <div className="form-control w-full max-w-xs mx-auto ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="appearance-none  -mt-10  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="description"
            rows="3"
            cols="40"
            typeof="text"
            {...register("details", {
              required: {
                value: true,
                message: "Details is Required",
              },
            })}
          ></textarea>
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Products Photo</span>
          </label>
          <input
            type="file"
            className="input mx-auto -mt-10  w-full max-w-xs"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white bg-red-500 border-0 hover:bg-green-500 "
          type="submit"
          value="Add Room"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRoom;
