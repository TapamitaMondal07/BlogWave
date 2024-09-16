import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        
        {/* <div className='b '> */}
          <span className='text-blue-900 font-bold text-2xl'>
            BlogWave
          </span>
        {/* /</div> */}
      </Link>
      <form className='relative hidden lg:flex items-center flex-grow mx-4'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2'>
          <AiOutlineSearch className='text-gray-400' />
        </button>
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={'div'}>
          <Link 
            to='/'
            className={`${path === '/' ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link as={'div'}>
          <Link 
            to='/about'
            className={`${path === '/about' ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link as={'div'}>
          <Link 
            to='/projects'
            className={`${path === '/projects' ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
