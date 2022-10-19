import React from 'react';
import { FaBed,FaPeopleArrows,FaCommentDollar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Room.css'
const Room = ({room}) => {

    const naviget = useNavigate()
    const handleBook = () =>{
            naviget('/bookingrom')
    }
    const {img,title,bed,person,amount,id} = room
    return (
        <div className='room_card'>
            <div className='h_title'>
                <img src= {img} alt="" />
                <p>{title}</p>
            </div>
            <div className='room_img'>
                <img src= {img} alt="" />
            </div>
            <div className='details_wrap'>
              <div className='details'>
                <p> <FaBed/>  {bed} </p>
                <p> <FaPeopleArrows/> {person} </p>
                <p> <FaCommentDollar/> {amount} </p>
              </div>
              <button onClick={handleBook}>Book Now</button>
            </div>
        </div>
    );
};

export default Room;