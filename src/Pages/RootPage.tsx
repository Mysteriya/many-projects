import React from 'react';
import { Outlet } from 'react-router';

const RootPage = () => {
    return (
        <div className='content'>
            <Outlet/>
        </div>
    );
};

export default RootPage;