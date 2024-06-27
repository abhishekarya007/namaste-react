import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
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
        element: <AboutUs/>
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
