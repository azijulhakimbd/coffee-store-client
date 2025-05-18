import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Pages/MainLayouts";
import Home from "./Pages/Home";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import ErrorPage from "./Pages/ErrorPage";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/SignUp";
import AuthProvider from "./Provider/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      { index: true, 
        loader:()=>fetch('http://localhost:3000/coffees'),
        Component: Home 
      },
      {
        path:'/addcoffee',
        Component:AddCoffee
      },
      {
        path:'/updateCoffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:UpdateCoffee
      },
      {
        path:'/signin',
        Component:SignIn
      },
      {
        path:'/signup',
        Component:Signup
      }
  ],
  },
  {
    path:'/*',
    Component:ErrorPage
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </StrictMode>
);
