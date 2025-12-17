import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppCompo = () => {
  const [customName,SetCustomName] = useState("");
  useEffect(()=>{
    SetCustomName("Prajakta Ghatage");
  },[]);
  return (
    <div className="app">
      <UserContext.Provider value={{userName:customName,SetCustomName}}>
        <Header />
      </UserContext.Provider>
      <UserContext.Provider value={{userName:"Prajakta",SetCustomName}}>  
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

//Lazy Loading
//Code Splitting
//On Demand Loading

const Grocery = lazy(() => import("./components/Grocery"));
const routerCompo = createBrowserRouter([
  {
    path: "/",
    element: <AppCompo />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "details/:resId",
        element: <MenuCard />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routerCompo} />);
