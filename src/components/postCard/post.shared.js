import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";

export const PostCard = ({ post }) => {
    const handleReadMoreClick = (event) => {
      event.preventDefault(); // Prevent the default link behavior
      window.location.href = `/blog/${post.slug}`; // Set the location to the post URL
    };
    return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div key={`content-${index}`} className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    <Link href={`/blog/${post.slug}`}>
              <span onClick={handleReadMoreClick}>Read More</span>
            </Link>
            </h2>

            <p className={twMerge("text-xl mb-4")}>
            {post.title.slice(0, 15)}...
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
                <Image
                  src={post.img}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
               <div dangerouslySetInnerHTML={{ __html: post.body.slice(0, 100) + '...' }}></div>
            </div>
          </div>
      </div>
    </TracingBeam>
  );
}



export default getPosts