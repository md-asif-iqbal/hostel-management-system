import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
  
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user) {
            navigate(from, { replace: true });
            console.log(user);
        }
       
    }, [user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-600'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    
    return (
        <div>
            <div class="min-h-screen lg:-mt-20 text-gray-100 flex justify-center">
    <div
      class="max-w-screen-xl m-0 sm:m-20  shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          
        </div>
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            Sign up for using UIU Hostel
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">
              <button onClick={() => signInWithGoogle()}
                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="bg-white p-2 rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span class="ml-4">
                  Sign In with Google
                </span>
              </button>

            </div>

            <div className='flex items-center'>
            <div class="my-12 border-b text-center w-full">
             </div>
             <div className='w-full'>
             Or sign up with e-mail
             </div>
             <div class="my-12 border-b text-center w-full">
              
             </div>
            </div>

            <div class="mx-auto max-w-xs">
              <form onSubmit={handleSubmit(onSubmit)}>
              <input
                class="w-full px-8 py-4 rounded-lg text-gray-800 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm  focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                      value: true,
                      message: 'Email is Required'
                  },
                  pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                  }
              })}
              />
              <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
              <input
                class="w-full px-8 py-4 rounded-lg text-gray-800 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: {
                      value: true,
                      message: 'Password is Required'
                  },
                  minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer'
                  }
              })}
              />
              <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            {signInError}
              <button type='submit' value="Sing In"
                class="mt-5 tracking-wide hover:bg-rose-600 font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  class="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                  Sign In
                </span>
              </button>
              </form>
              <p class="mt-6 text-md text-gray-600 text-center">
                You don't have an account? 
                <Link to="/signup" class="border-b ml-2 text-rose-600 border-red-600 hover:font-bold border-dotted">
                  Sing Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1  text-center hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")` }}


        ></div>
      </div>
    </div>
  
          </div>
    </div>

    );
};

export default Login;