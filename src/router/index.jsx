import {createHashRouter,RouterProvider} from "react-router-dom"

import Home_page from "../pages/home"
import Nosotros_page from "../pages/nosotros"
import Contactanos_page from "../pages/contacto"

const main_route = createHashRouter([
    {
        path:"/",
        element:<Home_page />
    },
    {
        path: "nosotros",
        element: <Nosotros_page />
    },
    {
        path:"/contactanos",
        element:<Contactanos_page />
    },
])

export default function routers(){     
    return (
        <>
        <RouterProvider router={main_route}/>
        </>
    )  
}