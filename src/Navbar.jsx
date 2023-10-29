import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='mb-10'>
    <nav className="flex flex-row justify-around items-center h-20 font-body p-2">
        <h1 className="text-2xl font-bold text-blue-500">Blogger</h1>
        <div className="flex space-x-7 text-xl font-light">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/create" className="hover:text-blue-400">New Blog</Link>
        </div>
    </nav>
    <hr className='w-1/2 mx-auto'/>
    </div>
  )
}

export default Navbar
