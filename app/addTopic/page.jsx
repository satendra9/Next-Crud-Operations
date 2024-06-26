"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Input data missing");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
    </>
  );
};

export default AddTopic;
