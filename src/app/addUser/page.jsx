"use client"
import React, { useState } from 'react';
import { addUser} from "@/lib/action"

const AddUser = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('body', value); 
    const result = await addUser(null, formData);
    alert("Saved to Database");
  };
  
    return (
<div class="flex items-center justify-center min-h-screen">
  <div class="mt-14 p-10 bg-white shadow-md rounded-lg w-96">
<form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input 
      type="text" 
      placeholder="Name" 
      name="username"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <input 
      type="email" 
      placeholder="Email" 
      name="email"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                        <input 
      type="password" 
      placeholder="Password" 
      name="password"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
                  <input 
      type="text" 
      placeholder="Image URL" 
      name="img"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />


    <button 
      type="submit"
      className="p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Add User
    </button>
  </form>
        </div>
        </div>

    );
}

export default AddUser