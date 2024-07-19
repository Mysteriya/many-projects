import React from 'react';
import { Outlet } from 'react-router';

const ContentPage = () => {
    return (
        <div className='content'>
            <Outlet/>
        </div>
    );
};

export default ContentPage;