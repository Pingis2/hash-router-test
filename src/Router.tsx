import { createHashRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Notfound } from "./pages/Notfound";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";

export const router = createHashRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Notfound></Notfound>,
        children: [
            {
                path: "/",
                element: <Home/>,
                index: true,
            },
            {
                path: "/contacts",
                element: <Contacts/>,
            }
        ]
    }
])