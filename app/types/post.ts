export type Post = {
    id: number;
    title: string;
    content: string;
    slug: string;
}

export function getPosts() {
    const posts: Post[] = [
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
    return posts;
}