import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider";
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  
  const [isSeller, setisSeller] = useState("Buyer");
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const { login,googleLogin, setLoading, setUser, forgetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = {
      email: userInfo.email
    }

    console.log(currentUser);

    login(userInfo.email, userInfo.password)
      .then((result) => {
        toast.success("success");
        let user = result.user;
        console.log(user);
        setLoading(true)
        setUser(user);

        fetch(' https://b612-used-products-resale-server-side-kp-orus.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })
          .then(res => res.json())
          .then(data => {
              // local storage is the easiest but not the best place to store jwt token
              localStorage.setItem('token', data.token);
              e.target.reset();
              console.log(data)
              navigate(from, { replace: true });
          });

      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, general: err.message });
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = password.length < 6;
    const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
    else if (noSymbolError) {
      setErrors({ ...errors, password: "Must have a unique number" });
      setUserInfo({ ...userInfo, password: " " });
    }
    else if (noCapitalLetterError) {
      setErrors({ ...errors, password: "Must have a capital letter" });
      setUserInfo({ ...userInfo, password: " " });
    }
    else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };


  const saveUser = (name, email, isSeller) =>{
    const user ={name, email, role:isSeller};
    fetch('https://b612-used-products-resale-server-side-kp-orus.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        setCreatedUserEmail(email);
    })
}

   let googleProvider = new GoogleAuthProvider();
  let handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setLoading(true)
        console.log(user)
        toast.success("Login successfull!")

        const currentUser = {
          email: user.email
        }
        console.log(currentUser);
        fetch(' https://b612-used-products-resale-server-side-kp-orus.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              localStorage.setItem('token', data.token);
              saveUser(user?.displayName,user?.email,isSeller)
              navigate(from, { replace: true });
          });
        // ...
      }).catch((error) => {
        console.log(error);
        toast.error("login failled")
      });
  }



  let resetPass = ()=>
  {
    setLoading(true);
    forgetPassword(userInfo.email)
    .then(() => {
      // Password reset email sent!
      // ..
      toast.success("Check your Mail. Reset password mail has been sent")
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrors({ ...errors, general: errorMessage });
      // ..
    });
  }

  
  document.title = "Login form"

  return (
    <div className='hero  my-20 container mx-auto'>
      <div className='hero-content grid md:gap-12 md:grid-cols-2 flex-col lg:flex-row'>
        <div className='text-center lg:text-left w-[100%]'>
          <lottie-player
            src='https://lottie.host/619c24e2-fe50-49fa-9f75-80efbc4fb9a2/OJQVRvtijC.json'
            background='transparent'
            speed='1'
            style={{ width: "350px", height: "350px" }}
            loop
            autoplay></lottie-player>
        </div>
        <div className='card sm:contents md:flex flex-shrink-0 w-full md:w-[120%] lg:w-[135%] shadow-2xl bg-base-100 py-20'>
          <h1 className='text-5xl text-center font-bold uppercase text-slate-800'>
            Login
          </h1>
          <form onSubmit={handleSubmit} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                name='email'
                placeholder='email'
                onChange={handleEmailChange}
                className='input input-bordered'
              />
              {errors.email && <p className='text-red-600'>{errors.email}</p>}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className='text-red-600'>{errors.password}</p>
              )}
              <label className='sm:flex sm:px-1 sm:py-2 sm:justify-between sm:items-center py-2 font-medium'>
                <a
                  href='#my-modal-2'
                  className='btn btn-primary bg-[#003566] text-white'>
                  Forgot password?
                </a>
                <div className='modal' id='my-modal-2'>
                  <div className='modal-box'>
                    <h3 className='font-bold text-lg'>Reset Password!!</h3>
                    <p className='py-4'>
                      Click the reset button to reset password
                    </p>
                    <div className='modal-action'>
                      <a
                        href='#'
                        className='btn btn-primary bg-[#003566] text-white'
                        onClick={resetPass}>
                        Reset Password
                      </a>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            {errors.general && <p className='text-red-600'>{errors.general}</p>}
            <div className='form-control mt-6'>
              <input
                className='btn btn-primary bg-[#003566] text-white'
                type='submit'
                value='Login'
              />
            </div>
          </form>
          <p className='text-center'>
            New here{" "}
            <Link className='text-[#003566] font-bold' to='/signup'>
              Sign Up
            </Link>{" "}
          </p>
          <button
            className='btn btn-ghost w-1/2 mx-auto mt-2'
            onClick={handleGoogleLogin}>
            <FcGoogle className='text-2xl mr-2'></FcGoogle>Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
