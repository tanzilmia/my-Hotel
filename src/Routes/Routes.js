import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import Register from "../component/Resigter/Register";
import Rooms from "../component/Rooms/Rooms";
import Main from "../Layout/Main";
import BookingRoom from '../component/BookingRoom/BookingRoom'
import PrivetRoute from "../PrivetRouter/PrivetRoute";

const router = createBrowserRouter([
    {
        path : '/', element : <Main></Main>, children :[
            {
                path : '/',
                element : <Rooms></Rooms>,  
            },
            {
                path : '/home',
                loader : ()=> fetch('data.json'),
                element : <Rooms></Rooms>, 
                
            },
            {
                path : '/bookingrom',
                element : <PrivetRoute>
                         <BookingRoom></BookingRoom>
                        </PrivetRoute>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default router