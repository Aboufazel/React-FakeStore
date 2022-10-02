import {createBrowserRouter} from "react-router-dom";
import Home from "../Home";
import Layout from "../../components/layout/Layout";
import About from "../About/About";
import Contact from "../Contact/Contact";
import SecondLayout from "../../components/layout/SecondLayout";
import Login from "../Login/Login";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },{
            path:"about-us",
                element: <About/>
            },{
                path:"contact-us",
                element: <Contact/>
            },
        ],
    },

    {
        path: "/",
        element: <SecondLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
])

export default routes;