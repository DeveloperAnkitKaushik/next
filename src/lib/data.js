const post = [
    {
        id: 1,
        title: "Post 1",
        body: ".............",
    },
    {
        id: 2,
        title: "Post 2",
        body: ".............",
    },
    {
        id: 3,
        title: "Post 3",
        body: ".............",
    },
    {
        id: 4,
        title: "Post 4",
        body: ".............",
    },
];

const user = [
    {
        id: 1,
        username: "Ankit Kauhsik",
    },
    {
        id: 2,
        username: "Ekta Kauhsik",
    },
    {
        id: 3,
        username: "Bhavna Kauhsik",
    },
    {
        id: 4,
        username: "Parveen Kauhsik",
    },
];

export const getPosts = async () => {
    return post;
};

export const getPost = async () => {
    return post.find((post) => post.id === id);
};

export const getUser = async (id) => {
    return user.find((user) => user.id === id);
};