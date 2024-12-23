import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user)
  const { theme } = useSelector((state) => state.theme)

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='text-2xl font-bold font-serif tracking-wide text-gray-800'>
              <span className='relative'>
                <span className='text-blue-600'>Blog</span>
                <span className='absolute -bottom-1 left-0 w-full h-1 bg-pink-500 rounded-md'></span>
              </span>
              <span className='text-pink-600 ml-1'>Wave</span>
            </span>
       
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
        <Button className='w-12 h-10' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
          {theme === 'light' ? <FaMoon/> : 
          <FaSun />}
        </Button>
        
        
        {currentUser ? (
         <Dropdown
         arrowIcon={false}
         inline
         label={
           <Avatar alt='user' img={currentUser.profilePicture} rounded />
         }
       >
         <Dropdown.Header>
           <span className='block text-sm'>@{currentUser.username}</span>
           <span className='block text-sm font-medium truncate'>
             {currentUser.email}
           </span>
         </Dropdown.Header>
         <Link to={'/dashboard?tab=profile'}>
           <Dropdown.Item>Profile</Dropdown.Item>
         </Link>
         <Dropdown.Divider />
         <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
       </Dropdown>
     ) : (
       <Link to='/sign-in'>
         <Button gradientDuoTone='purpleToBlue' outline>
           Sign In
         </Button>
       </Link>
     )}
     <Navbar.Toggle />
   </div>
   <Navbar.Collapse>
     <Navbar.Link active={path === '/'} as={'div'}>
       <Link to='/'>Home</Link>
     </Navbar.Link>
     <Navbar.Link active={path === '/about'} as={'div'}>
       <Link to='/about'>About</Link>
     </Navbar.Link>
     <Navbar.Link active={path === '/projects'} as={'div'}>
       <Link to='/projects'>Projects</Link>
     </Navbar.Link>
   </Navbar.Collapse>
 </Navbar>
);
}