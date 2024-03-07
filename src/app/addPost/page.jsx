"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addPost} from "@/lib/action"

const AddPost = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('body', value); 
    const result = await addPost(null, formData);
    alert("Saved to Database");
  };
  
    return (
<div class="flex items-center justify-center min-h-screen">
  <div class="mt-14 p-10 bg-white shadow-md rounded-lg w-96">
<form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input 
      type="text" 
      placeholder="Title" 
      name="title"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <input 
      type="text" 
      placeholder="Slug" 
      name="slug"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                  <input 
      type="text" 
      placeholder="Image URL" 
      name="img"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <input 
      type="text" 
      placeholder="UserId" 
      name="userId"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
<ReactQuill 
  theme="snow" 
  value={value} 
  onChange={setValue} // Add this line
  name="body"
  className="bg-white"
  placeholder="Write Blog" 
/>

    <button 
      type="submit"
      className="p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Create
    </button>
  </form>
        </div>
        </div>

    );
}

export default AddPost