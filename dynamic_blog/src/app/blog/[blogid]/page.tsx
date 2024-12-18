"use client";
import Comments from "@/components/Comments";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

type PostDetail = {
    title: string,
    body: string,
    tags: string[],
    reactions: {likes: number, dislikes: number},
    views: number,
}

type CommentDetail = {
    id: number,
    body: string,
    likes: number,
    user: {
        username: string,
    }
}

export default function PostPage(){
    const [post, setPost] = useState<PostDetail | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<CommentDetail[]>([]);

    const {blogid} = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const res = await fetch(`https://dummyjson.com/posts/${blogid}`);
                
                if (!res.ok){
                    throw new Error(`Failed to fetch post: ${res.statusText}`);     
                }
                const postData = await res.json();
                setPost({
                    title: postData.title,
                    body: postData.body,
                    tags: postData.tags,
                    reactions: {likes: postData.reactions.likes, dislikes: postData.reactions.dislikes},
                    views: postData.views,
                })

                const commentRes = await fetch(`https://dummyjson.com/posts/${blogid}/comments`);
                if(!commentRes.ok){
                    throw new Error(`Failed to fetch comments: ${commentRes.statusText}`);
                }
                const commentsData = await commentRes.json();
                setComments(commentsData.comments)

            } catch (err: any){
                console.error("Error fetching post: ", err);
                setError(err.message);

            }
        }

        if (blogid) fetchPost();
        
    }, [blogid]);

    return(
        <>
            <div className="container mx-auto text-center py-12 px-20">
                {error ? (
                <p className="text-center">Error: {error}</p>
                ) : post ? (
                <div className="px-8 md:px-16">
                    <h2 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-yellow-700 to-green-600 bg-clip-text text-transparent ">{post.title}</h2>
                    <p className="text-lg mb-8">{post.body}</p>
                    <p className="text-lg mb-8">Type: {post.tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()).join(", ")}</p>
                    <p className="font-semibold text-left">Views: <span className="text-blue-500">{post.views}</span></p>
                    <h2 className="font-semibold text-left mt-4 text-lg">Reactions</h2>
                    <p className="font-semibold text-left mt-2">Likes: <span className="text-blue-500">{post.reactions.likes}</span></p>
                    <p className="font-semibold text-left mt-2">Views: <span className="text-blue-500">{post.reactions.dislikes}</span></p>
                    
                    <h1 className="font-bold text-xl my-4">Comments</h1>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div
                                className="border p-4 mb-4 text-left rounded shadow dark:border-white w-full lg:w-1/2 mx-auto"
                                key={comment.id}
                            >
                                <p className="font-bold">{comment.body}</p>
                                {comment.user && (
                                    <div className="flex justify-between">
                                        <p> - {comment.user.username}</p>
                                        <p><FaHeart className="inline mr-1" /> {comment.likes}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No comments</p>
                    )
                    }
                    
                    <Comments />
                </div>
                ) : (
                <p>Loading...</p>
                )}
            </div>
        </>
    )
}