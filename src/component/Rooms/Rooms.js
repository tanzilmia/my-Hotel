import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Room from '../Room/Room';
import '../Room/Room.css'
const Rooms = () => {
    const rooms = useLoaderData()
    // const {img,title,text,bed,person,amount,id} = cards
    return (
       <div className='roomscard_wrapping'>
         {
            rooms.map(room => <Room key={room.id} room = {room}></Room>)
         }
       </div>
    )
};

export default Rooms;