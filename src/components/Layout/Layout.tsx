import React from 'react';
import {PropsWithChildren} from 'react';
import Navbar from '../Navbar/Navbar';


const Layout:React.FC<PropsWithChildren> = ( {children} ) => {
  
    return (
        <>
          <Navbar></Navbar>
          <main>{ children }</main>

        </>
    );
};
export default Layout;
