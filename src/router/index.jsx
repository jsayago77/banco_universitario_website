import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Home_page from "../pages/home"

const main_route = createBrowserRouter([
    {
        path:"/",
        element:<Home_page />
    }
])

export default function routers(){     
    return (
        <>
        <RouterProvider router={main_route}/>
        </>
    )  
}