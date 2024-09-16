import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-2'>
        {/* left */}
        <div className='flex-1 flex justify-end pr-5'>
          <Link to='/' className='font-bold dark:text-white text-center'>
            <span className='text-6xl font-bold font-serif tracking-wide text-gray-800'>
              <span className='relative'>
                <span className='text-blue-600'>Blog</span>
                <span className='absolute -bottom-1 left-0 w-full h-1 bg-pink-500 rounded-md'></span>
              </span>
              <span className='text-pink-600 ml-1'>Wave</span>
            </span>
          </Link>
        </div>
        {/* right */}
        <div className='flex-1 pl-12'>
          <form className='flex flex-col gap-6 max-w-md mx-auto'>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='text' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>
            <Button className='bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex justify-center text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500 ml-1'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
