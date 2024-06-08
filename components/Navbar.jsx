import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-8 py-53 bg-slate-800 items-center'>
        <Link className="text-white font-bold" href="/">Topic Search</Link>
        <Link className="bg-white p-2" href="/addTopic">Add Topic</Link>

    </nav>
  )
}

export default Navbar