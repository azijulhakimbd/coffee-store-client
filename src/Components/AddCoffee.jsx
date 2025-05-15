import React from "react";

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form=e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);
        // send data to db
        fetch('http://localhost:3000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log('after add coffee', data);
            
        })
        
    }
  return (
    <div className="p-24 bg-[#efefef]">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            {/* Name */}
            <label className="label font-bold text-black">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter coffee name"
            />
          </fieldset>

          {/* Chef */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-black">Quantity</label>
            <input
              type="text"
              name="quantity"
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
              className="input w-full"
              placeholder="Enter coffee supplier"
            />
          </fieldset>

          {/* Taste */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-black">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>

          {/* Category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-black">Category</label>
            <input
              type="text"
              name="category"
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
              className="input w-full"
              placeholder="Coffee Photo URL"
            />
          </fieldset>
          {/* add coffee */}
          <input type="submit" className="btn w-full font-bold text-black" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
