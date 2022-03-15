import Logo from "~/components/header/logo";
/* icons */
import {AiFillGithub, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col justify-between">
                <Logo/>
                <p
                    className="text-sm text-gray-500"
                >
                    © 2021 - {year} HD | Blog App —
                    <a
                        href="https://twitter.com/harunndogdu"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @harunndogdu
                    </a>
                </p>
                <div className="flex items-center justify-between cursor-pointer">
                    <AiFillLinkedin className="text-gray-600 hover:text-gray-500" size={24}/>
                    <AiFillGithub className="text-gray-600 hover:text-gray-500 ml-4" size={24}/>
                    <AiFillTwitterSquare className="text-gray-600 hover:text-gray-500 ml-4" size={24}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;