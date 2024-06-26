"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Navbar from './Navbar';

const EditTopicForm = ({id, title, description}) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
     
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
    
    <input
      onChange={(e) => setNewTitle(e.target.value)}
      value={newTitle}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Topic Title"
    />

    <input
      onChange={(e) => setNewDescription(e.target.value)}
      value={newDescription}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Topic Description"
    />

    <button
      type="submit"
      className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
    >
      Update Topic
    </button>
  </form>
  </>
  )
}

export default EditTopicForm