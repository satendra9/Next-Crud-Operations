"use client";


import { signOut } from 'next-auth/react';
import Link from 'next/link'
//import { signOut } from 'next-auth/react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-8 py-53 bg-slate-800 items-center'>
        <Link className="text-white font-bold" href="/topicsList">Topic Search</Link>
        <Link className="bg-white p-2" href="/addTopic">Add Topic</Link>
        <div>
          <button onClick={() => signOut()} className='bg-white border-separate p-2'>Log Out</button>
        </div>

    </nav>
  )
}

export default Navbar