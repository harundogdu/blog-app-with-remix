import {LoaderFunction, useLoaderData} from "remix";
import Main from "~/components/main/main";


export const loader: LoaderFunction = () => {
    const posts = [
        {
            title: 'Hello World',
            content: 'This is my first blog post!',
        },
        {
            title: 'Second Post',
            content: 'This is my second blog post!',
        },
    ]

    return {
        posts,
    }

}


export default function Index() {
    const post = useLoaderData();
    return (
        <div>
           <Main />
        </div>
    );
}
