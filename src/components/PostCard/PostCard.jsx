import Image from "next/image";
import "./PostCard.css";
import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <div className="postcard">
            <div className="post-img">
                <div className="post-img-container">
                    <Image src="/hero.gif" fill />
                </div>
                <div className="post-img-date">12/03/2003</div>
            </div>
            <div className="post-text">
                <div className="post-text-heading">{post.title}</div>
                <div className="post-text-para">{post.body}</div>
                <Link href={`/blog/${post.id}`} className="post-text-link">Read More</Link>
            </div>
        </div>
    );
}

export default PostCard;