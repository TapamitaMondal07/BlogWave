import { Button, Label, TextInput, Alert, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure
} from '../redux/user/userSlice';

export default function Signin() {

  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {  // we could have written localhost:3000 directly with the fetch url but instead we have added a proxy in the vite.config.js file
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
      const data = await res.json();
      if(data.success === false){
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }
      // setLoading(false);
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
  } catch(error){
      //setErrorMessage(error.message);
      dispatch(signInFailure(error.message));
  }
};
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
          <form className='flex flex-col gap-6 max-w-md mx-auto' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange} />
            </div>
            <Button className='bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded' type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
              'Sign In'
              )}
            </Button>
          </form>
          <div className="flex justify-center text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500 ml-1'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
