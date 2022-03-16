import {Post} from "~/types/post";
import {NavLink} from "@remix-run/react";
import {BsArrowRightShort} from "react-icons/bs";

function Main({posts}: { posts: Post[] }) {
    return (
        <section className="text-gray-600 body-font flex flex-col flex-1 h-full py-9">
            <div className="container px-5 py-4 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom
                        Man Braid</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle
                        crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine,
                        ramps microdosing banh mi pug.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"/>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {
                        posts.map(post => (
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" key={post.id}>
                                <div
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{post.title}</h2>
                                    <p className="leading-relaxed text-base">{post.content}</p>
                                    <NavLink
                                        to={`/posts/${post.slug}`}
                                        className="mt-3 text-green-500 inline-flex items-center">
                                        Learn More
                                        <BsArrowRightShort/>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center">
                    <NavLink to="posts"
                             className="inline-flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-12 focus:outline-none hover:bg-green-600 rounded text-lg">Load
                        More...
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default Main;