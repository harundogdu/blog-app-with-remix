import {json, LoaderFunction, useCatch, useLoaderData} from "remix";
import invariant from "tiny-invariant";
import {Post} from "~/types/post";
import {Document} from "~/root";

export const loader: LoaderFunction = ({params}) => {
    invariant(params.postSlug, "postSlug is required");
    const postSlug = params.postSlug;

    // @todo Load post data from API

    if (!postSlug) {
        throw new Response("Not Found", {
            status: 404,
        });
    }

    // @todo Return post data from API

    const post = {
        title: "Post Details 1",
        content: "Post Details 1",
        slug: postSlug,
    }
    return json(post)
}

function $PostSlug() {
    const post = useLoaderData<Post>();
    return (
        <div className="flex-1 px-24 py-4">
            <h1>{post.title}</h1>
        </div>
    );
}

export function CatchBoundary() {
    const caught = useCatch();
    return (
        <Document>
            <h1>We couldn't find that page!</h1>
            <h3>{caught.status}</h3>
            <p> {caught.statusText}</p>
        </Document>
    )
}

export default $PostSlug;