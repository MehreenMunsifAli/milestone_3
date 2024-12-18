"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface CommentType {
    id: number;
    text: string;
}

export default function Comments() {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [newComment, setNewComment] = useState<string>("");

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const newId = Date.now();
        setComments([...comments, {id: newId, text: newComment }]);
        setNewComment("");
    };


    return(
        <div className="lg:w-1/2 w-full mx-auto">
            <ul className="mt-4">
                {comments.map((comment) => (
                    <li className="border p-4 mb-4 text-left rounded shadow dark:border-white font-bold" key={comment.id}>{comment.text}</li>
                ))}
            </ul>
            <Input 
                className="my-8 dark:border-white"
                type="text"
                placeholder="Leave a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <Button className="float-right mb-8" onClick={handleAddComment}>Submit</Button>
        </div>
    )
}