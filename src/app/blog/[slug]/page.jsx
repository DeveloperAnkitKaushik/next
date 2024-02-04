import Image from "next/image";
import "./Slug.css";
import UserData from "@/components/UserData/UserData";

const getPostData = async (slug) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!response.ok) {
        throw new Error("Something Went Wrong");
    }

    return response.json();
}

const Slug = async ({ params }) => {
    const { slug } = params;
    const post = await getPostData(slug);
    return (
        <div className="slug-container">
            <div className="slug-img">
                <Image src="/hero.gif" fill />
            </div>
            <div className="slug-text">
                <div className="slug-text-heading">{post.title}</div>
                <UserData userId={post.id} />
                <div className="slug-text-para">{post.body}</div>
            </div>
        </div>
    );
}

export default Slug;