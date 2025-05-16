import { Eye, Pencil, Trash2, X } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, category, Price, photo } = coffee;


  // Delete 
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    // Start Delete
    fetch(`http://localhost:3000/coffees/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
        Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });
      }
      console.log(data);
      
    })

    
  }
});
  };
  return (
    <div>
      <div className="card card-side bg-[#efefef] p-10 shadow-sm">
        <figure>
          <img className="h-50" src={photo} alt="photo" />
        </figure>
        <div className="flex w-full justify-around lg:mt-10 ">
          <div>
            {" "}
            <h6 className="font-bold text-xl text-gray-600">{name}</h6>
            <p className="font-bold text-xl text-gray-600">Price:{Price}</p>
            <p className="font-bold text-xl text-gray-600">
              Category:{category}
            </p>
            <p className="font-bold text-xl text-gray-600">
              Quantity:{quantity}
            </p>
          </div>
          <div className="join join-vertical space-y-2">
            <button className="join-item bg-yellow-600 text-amber-100 btn">
              <Eye />
            </button>
            <button className="join-item bg-gray-800 text-amber-100 btn">
              <Pencil />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="join-item bg-red-700 text-amber-100 btn"
            >
              {" "}
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
