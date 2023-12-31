import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { VscMortarBoard } from 'react-icons/vsc';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4 sticky top-0 bg-white shadow-md ' style={{ zIndex: '10' }}>
      <div className='flex items-center space-x-4'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <Link to="/">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-pink-600'>
            <span className='font-bold'>KID</span>
            vocate
          </h1>
        </Link>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] space-x-2'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='search' />
      </div>
      <div className="flex items-center space-x-4">
        <Link to='/games'>
          <button className='bg-pink-700 text-white hidden md:flex items-center py-2 px-4 rounded-full'>
            Play Now
            <VscMortarBoard size={20} className='ml-2' />
          </button>
        </Link>
        <Link to="/">
          <button className='bg-pink-700 text-white hidden md:flex items-center py-2 px-4 rounded-full'>
            Login
            <BsPerson size={20} className="ml-2" />
          </button>
        </Link>
      </div>
      {sideNav ? (
        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNav(!sideNav)}></div>
      ) : (
        ""
      )}
      <div className={sideNav
        ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200'
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'
      }
      >
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} className='absolute  right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4 '><span className='text-cyan-700 font-bold'>KIDvocate</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-900'>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/" className="cursor-pointer">Home</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/games" className="cursor-pointer">Play Games</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/courses" className="cursor-pointer">Courses</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/personal" className="cursor-pointer">Discuss</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className="mr-4 text-white bg-black rounded-full cursor-pointer" />
              <Link to="/Contact" className="cursor-pointer">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
