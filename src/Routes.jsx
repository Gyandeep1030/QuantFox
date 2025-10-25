import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Dashboard from "./pages/Dashboard/Dashboard";
import Company from "./pages/Company/Company";
import Checkout from "./components/Payment/Checkout";
import NotFound from "./pages/NotFound/NotFound";
import About from './pages/About/About';

const Routes = () => {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <App />, // Parent layout (was App in your code)
      children: [
        { 
            index: true, 
            element: <Home /> 
        },
        { 
            path: "about", 
            element: <About /> 
        },
        { 
            path: "services", 
            element: <Services /> 
        },
        { 
            path: "dashboard/*", 
            element: <Dashboard /> 
        },
        { 
            path: "company/:symbol", 
            element: <Company /> 
        },
        { 
            path: "checkout", 
            element: <Checkout /> 
        },
        { 
            path: "*", 
            element: <NotFound /> 
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes