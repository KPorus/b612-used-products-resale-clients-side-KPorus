import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../component/context/AuthProvider/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const SignUp= () => {
  const {googleLogin} = useContext(AuthContext);
  const [isSeller, setisSeller] = useState("Buyer");
  const [createdUserEmail, setCreatedUserEmail] = useState('')
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

  const { createUser, setLoading } = useContext(AuthContext);

  let handleLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let name = form.name.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setLoading(true);
        user.displayName = name;
        const currentUser = {
          email: userInfo.email,
        };
        fetch(" https://b6a11-service-review-server-side-kp-orus-steel.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success('Sign up Successfully.')
            saveUser(name,email,isSeller);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setErrors({ ...errors, general: error.message });
      });
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
    } else if (noSymbolError) {
      setErrors({ ...errors, password: "Must have a unique number" });
      setUserInfo({ ...userInfo, password: " " });
    } else if (noCapitalLetterError) {
      setErrors({ ...errors, password: "Must have a capital letter" });
      setUserInfo({ ...userInfo, password: " " });
    } else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };



  let googleProvider = new GoogleAuthProvider();
  let handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setLoading(true)
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
              saveUser(user.displayName,user.email,isSeller);
              localStorage.setItem('token', data.token);
              navigate(from, { replace: true });
          });
        // ...
      }).catch((error) => {
        console.log(error);
        toast.error("login failled")
      });
  }

  let Sellercheck = (e) => {
   let account =  e.target.checked;
   console.log(account);
   setisSeller("Seller");
   if(account === false)
   {
    setisSeller("Buyer")
    return
  }
  };

  console.log(isSeller);

  document.title = "Sign Up"
  return (
    <div className='hero min-h-screen bg-base-200' onSubmit={handleLogin}>
      <div className='hero-content'>
        <form className='card flex-shrink-0 w-full md:w-[120%] lg:w-[140%] shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
                onChange={handleEmailChange}
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
                required
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className='text-red-600'>{errors.password}</p>
              )}

              <small>
                {" "}
                <Link to='/login'>Already have a account!! <span className="font-bold text-[#085594]">Login</span></Link>
              </small>
              <div className='flex text-xl'>
                <input type='checkbox' onClick={Sellercheck} />
                <label className='label' value="seller">
                  <span className='label-text'>
                    SELLER ACCOUNT
                  </span>
                </label>
              </div>
            </div>
            {errors.general && <p className='text-red-600'>{errors.general}</p>}
            <div className='form-control mt-6'>
              <button className='btn btn-primary bg-[#003566] text-white'>
                Sign up
              </button>
            </div>
            <button className="btn btn-ghost w-1/2 mx-auto mt-2" onClick={handleGoogleLogin}><FcGoogle className="text-2xl mr-2"></FcGoogle>Google Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
