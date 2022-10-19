import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
            {/* header part */}
            <div className='header_part'>
                <Header></Header>
            </div>
            <div className='main_content'>
                <Outlet></Outlet>
            </div>
            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;