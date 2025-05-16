import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../Components/CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees,setsCoffees]=useState(initialCoffees)
  
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 lg:mt-15">
        {
            coffees.map(coffee => <CoffeeCard 
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setsCoffees ={setsCoffees}

               ></CoffeeCard>)
        }
  </div>;
};

export default Home;
