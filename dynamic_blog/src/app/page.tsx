"use client";
import { useEffect, useState } from "react";
import BlogComponent from "../components/Blog";
import Link from "next/link";
import Hero from "@/components/Hero";

interface PostType {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

export default function Home() {
  
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const postData = await response.json();
        setPosts(postData.posts);
        setIsLoading(false);
      } catch (error) {
          console.error("Error fetching post ", error);
          setIsLoading(false);
      } 
    }

    fetchData();

  }, []); // it will be rendered when the component is mounted first time

  return (
    <div>
      <Hero />
      <div className="container mx-auto py-12 bg-orange-100 dark:bg-transparent">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) :  (
          <>
            <h2 className="text-2xl font-bold text-center mb-8">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-6">
              {posts.map((data) => {
                return (
                  <div key={data.id} className=" md:col-span-6 ">
                    <Link href={`/blog/${data.id}`} className=" text-center no-underline">
                      <BlogComponent blogName={data.title} blogDescription={data.tags.join(", ")} blogContent={data.body} />
                    </Link>
                  </div>
                )
              })
            }
            </div>
          </>
          
          )
        }

      </div>
    </div>
  );
}
