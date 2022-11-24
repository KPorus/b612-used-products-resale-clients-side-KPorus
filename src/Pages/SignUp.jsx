import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  document.title = "Sign Up";
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl mx-auto'>Sign Up Now</h1>
      <div className='flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm dark:text-gray-400'>
            Sign Up to create your account
          </p>
        </div>
        <form
          novalidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'>
          <div className='space-y-4'>
            <div>
              <label for='email' className='block mb-2 text-sm'>
                Full Name
              </label>
              <input
                type='name'
                name='name'
                placeholder='Md Fardin Khan'
                className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
            <div>
              <label for='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                placeholder='leroy@jenkins.com'
                className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label for='password' className='text-sm'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                placeholder='*****'
                className='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <button
                type='button'
                className='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900'>
                Sign in
              </button>
            </div>
            <p className='px-6 text-sm text-center dark:text-gray-400'>
              Have an account yet?
              <Link
                to="/login"
                className='hover:underline dark:text-violet-400'>
                Login In
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
