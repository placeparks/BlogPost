import PostCard from '@/components/postCard/postCard.shared';
import { getPosts } from '@/lib/data';
import React from 'react';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Cannot fetch data');
  }
  return res.json();
};

const Blog = async () => {
  const posts = await getPosts();
  return (
 <div className="flex flex-wrap -mx-2 p-14">
  {posts.map((post) => (
    <PostCard key={post.id} post={post} />
  ))}
</div>

  );
};

export default Blog;
