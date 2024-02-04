import { getUser } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

// const getPostData = async (userid) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
//     if (!response.ok) {
//         throw new Error("Something Went Wrong");
//     }

//     return response.json();
// }

const UserData = async ({ userId }) => {
    // const user = await getPostData(userId);
    const user = await getUser(userId);
    return (
        <div className="slug-text-desc">
            <div className="slug-text-avatar">
                <Image src="/hero.gif" height={50} width={50} />
            </div>
            <div className="slug-text-avatar-details">
                <div className="text-gray">Author</div>
                <Suspense fallback={<div>Loading....</div>}>
                    <div>{user.username}</div>
                </Suspense>
            </div>
            <div className="slug-text-avatar-timedetails">
                <div className="text-gray">Published</div>
                <div>11/01/23</div>
            </div>
        </div>
    );
}

export default UserData;