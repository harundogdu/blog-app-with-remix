import {json, LoaderFunction, useLoaderData} from "remix";
import Main from "~/components/main/main";
import {Post} from "~/types/post";

export const loader: LoaderFunction = () => {
    const posts = [
        {
            id: 1,
            title: 'Hello World',
            content: 'This is my first blog post!',
            slug: 'hello-world',
        },
        {
            id: 2,
            title: 'Second Post',
            content: 'This is my second blog post!',
            slug: 'second-post',
        },
        {
            id: 3,
            title: 'Third Post',
            content: 'This is my third blog post!',
            slug: 'third-post',
        }
    ]

    return json(posts);
}

export default function Index() {
    const posts = useLoaderData<Post[]>();
    return (
        <Main posts={posts}/>
    );
}
