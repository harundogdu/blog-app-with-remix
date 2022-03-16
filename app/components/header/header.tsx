import React from "react";
import Navbar from "~/components/header/navbar";
import Logo from "~/components/header/logo";
import HeaderCta from "~/components/header/header-cta";

function Header() {
    return (
        <header className="text-gray-600 body-font shadow">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Logo/>
                <Navbar/>
                <HeaderCta />
            </div>
        </header>
    );
}

export default Header;