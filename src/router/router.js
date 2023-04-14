import React from "react";
import {createBrowserRouter} from "react-router-dom"
import RouterLayout from "./RouterLayout";
import App from "../App";
import MainCountries from "../pages/MainCountries";
import CountryDetails from "../pages/CountryDetails";


export const router = createBrowserRouter([

   { path: "/",
    element: <RouterLayout />,

    children: [

      {
          path: "/",
        element: <App/>,

        children:[ {
              path: "/",
              element: <MainCountries/>
        },

        {
            path: "/countryDetails/:id",
            element: <CountryDetails />
        }]
    }
    ]  
}
])