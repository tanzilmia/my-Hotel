import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../contextAPi/UserContext';
import './Navbar.css'
const Navbar = () => {
    const navigetor = useNavigate()
    const {Logout,user} = useContext(myContext)
    const handleLogout = () =>{
        Logout()
        navigetor('/login')
    }
    return (
        <div className='navbar_wrap'>
            <div>
                <h2>My Hotel</h2>
            </div>
            <nav className='navbar'>
            <Link to ='home'>Home</Link>
            <Link to= 'register'>Registration</Link>
           </nav>

            {
                user && user?.uid ?
                <>
                     <div>
                    <button onClick={handleLogout}>LogOut</button>
                     </div>
                </>
                :
                <>
                <Link to= 'login'>Login</Link>
                </>
            }

          
        </div>
    );
};

export default Navbar;