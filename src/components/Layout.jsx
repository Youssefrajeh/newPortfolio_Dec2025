import React from 'react';
import Navbar from './Navbar';
import FabMenu from './FabMenu';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <FabMenu />
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
