import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Home_page from "../pages/home"
import Nosotros_page from "../pages/nosotros"

const main_route = createBrowserRouter([
    {
        path:"/",
        element:<Home_page />
    },
    {
        path:"/nosotros",
        element:<Nosotros_page />
    },
])

export default function routers(){     
    return (
        <>
        <RouterProvider router={main_route}/>
        </>
    )  
}