import React from 'react'
import Navbar from "../components/Navbar/navbar.component";

 const Movielayout = (props) => {
    return (
        <>
         <Navbar />
      {/* <HeroCarousal /> */}
      {props.children}
            
        </>
    );
};

export default Movielayout;