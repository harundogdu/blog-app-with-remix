import Logo from "~/components/header/logo";
/* icons */
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterSquare} from "react-icons/ai";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-gray-600 body-font py-4 border-t">
            <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col justify-between">
                <Logo/>
                <div className="flex items-center justify-between cursor-pointer space-x-4">
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
                    <AiFillLinkedin
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        size={28}
                    />
                    <AiFillGithub
                        className="text-gray-600 hover:text-gray-900 ml-4 transition-colors"
                        size={28}
                    />
                    <AiFillTwitterSquare
                        className="text-gray-600 hover:text-gray-900 ml-4 transition-colors"
                        size={28}
                    />
                    <AiFillFacebook
                        className="text-gray-600 hover:text-gray-900 ml-4 transition-colors"
                        size={28}
                    />
                    <AiFillMediumSquare
                        className="text-gray-600 hover:text-gray-900 ml-4 transition-colors"
                        size={28}
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;