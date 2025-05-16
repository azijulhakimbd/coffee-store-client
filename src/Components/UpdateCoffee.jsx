import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, quantity, category, supplier, details, Price, photo } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);
    // send updated coffee to DB
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-15">
      <h2 className="text-center text-4xl mb-10 font-bold">Update Coffee</h2>
      <div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              {/* Name */}
              <label className="label font-bold text-black">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>

            {/* Quantity */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label font-bold text-black">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="Enter coffee chef"
              />
            </fieldset>

            {/* Supplier */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label font-bold text-black">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>

            {/* Price */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label font-bold text-black">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={Price}
                className="input w-full"
                placeholder="Enter coffee Price"
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label font-bold text-black">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input w-full"
                placeholder="Enter coffee category"
              />
            </fieldset>

            {/* Details */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label font-bold text-black">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>

          {/* Photo URL */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border my-6 p-4">
            <label className="label font-bold text-black">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Coffee Photo URL"
            />
          </fieldset>
          {/* add coffee */}
          <input
            type="submit"
            className="btn w-full font-bold text-black"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
