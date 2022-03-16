import {json, LoaderFunction, useLoaderData} from "remix";
import Main from "~/components/main/main";
import {getPosts, Post} from "~/types/post";

export const loader: LoaderFunction = () => {
    return json(getPosts());
}

export default function Index() {
    const posts = useLoaderData<Post[]>();
    return (
        <Main posts={posts}/>
    );
}
