import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestroMenu from "./components/RestroMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const AboutUs = lazy(()=>import("./components/AboutUs"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "home",
        element: <Body />,
      },
      {
        path: "about",
        element: <Suspense fallback={<div>Loading.....</div>}><AboutUs/></Suspense>
      },
      {
        path: "contact",
        element: <ContactUs/>
      },
      {
        path: "/home/restro/:resId",
        element: <RestroMenu/>
      }

    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
