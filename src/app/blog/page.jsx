import PostCard from "@/components/PostCard/PostCard";
import "./Blog.css";
import { getPosts } from "@/lib/data";

// const getAllPost = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//         throw new Error("Something Went Wrong");
//     }

//     return response.json();
// }

const Blog = async () => {
    // const allPost = await getAllPost();
    const allPost = await getPosts();
    return (
        <div className="blog-container">
            {allPost.map((post, id) => (
                <div className="blog-container-post">
                    <PostCard post={post} key={id} />
                </div>
            ))}
        </div>
    );
}

export default Blog;