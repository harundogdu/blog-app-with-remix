import React from 'react';
import {NavLink} from "@remix-run/react";

function Navbar() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to={"/"} className="mr-5 hover:text-gray-900">Home</NavLink>
            <NavLink to={"/about"} className="mr-5 hover:text-gray-900">About</NavLink>
        </nav>
    );
}

export default Navbar;