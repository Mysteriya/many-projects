import React from 'react';
import { Outlet } from 'react-router';

const RootPage = () => {
    return (
        <div className='root'>
            <Outlet/>
        </div>
    );
};

export default RootPage;