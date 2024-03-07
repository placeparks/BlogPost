"use client"
import React from "react"
import Image from "next/image"
import { BackgroundGradient } from "../ui/background-gradient"
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="w-full sm:w-1/4 p-2">
      <BackgroundGradient className="rounded-[22px]" containerClassName="h-full flex">
        <div className="flex flex-col max-w-sm bg-white dark:bg-zinc-900 rounded-[22px] p-4 sm:p-10 h-full">
          <Image
            src={post.img}
            alt={post.title}
            height="400"
            width="400"
            className="object-contain rounded-t-[22px]"
          />
          <div className="flex-grow">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {post.title.slice(0, 15)}...
            </p>
            <div className="text-sm text-neutral-600 dark:text-neutral-400"
                 dangerouslySetInnerHTML={{ __html: post.body.slice(0, 100) + '...' }}>
            </div>
          </div>
          <div className="mt-4">
            <Link href={`/blog/${post.slug}`}>
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default PostCard;
