"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  
  {
    title: "Welcome to Mirac.eth Blog!",
    description:
      "Hi there! I'm Hannan Shaukat, the creator and writer behind Mirac.eth Blog. This blog is my little corner of the internet where I share my thoughts, experiences, and passions with you.I started this blog as a way to express myself and connect with others who share similar interests.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Welcome to Mirac.eth Blog!
      </div>
    ),
  },
  {
    title: "About",
    description:
      "As a multifaceted software developer, Hannan Shoukat excels in technologies ranging from MERN and Blockchain to Rust and Python, leveraging these skills in both teaching and entrepreneurial ventures. With an educational background in Petroleum Engineering and Total Quality Management, Hannan is passionately exploring intersections between technology and management for future innovations. Aspiring towards a Ph.D., Hannan is on a quest to blend his diverse expertise to pioneer in the realms of blockchain, AI, and online business domains.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/hannan.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Why I Started This Blog",
    description:
    "My journey into blogging began as a creative outlet to document my life and share my experiences with others. Over time, it has evolved into a platform where I can connect with a community of like-minded individuals and share my knowledge and insights on topics that matter to me.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Why I Started This Blog
      </div>
    ),
  },
  {
    title: "What You Can Expect",
    description:
    "On Mirac.eth, you'll find a mix of content ranging from Coding, Blockchain, Devloper Tools etc. My goal is to provide valuable content that resonates with you and adds a little bit of sunshine to your day.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        What You Can Expect
      </div>
    ),
  },
];
export default function About() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
