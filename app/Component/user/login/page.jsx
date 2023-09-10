'use client'
import { useState } from 'react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'


import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Header from '../../Header'
import Footer from '../../footer'

function Login() {
  const routes = useRouter()

  let [user, setuser] = useState({
    email: "",
    password: "",

  })
  // let [login ,setlogin]=useState(false)
  const handleChange = (e) => {
    console.log(e.target.name)
    setuser({ ...user, [e.target.name]: e.target.value })


  }

  let Submit=()=>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/user/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : user
    };
    
    axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data.data._id));
      alert(response.data.message)
      localStorage.setItem('uid',response.data.data._id)
      localStorage.setItem('islogin',true)
      routes.push("/Component/homepage")

    })
    .catch((error) => {
      console.log(error);
    });
    
  }
  return (
    <>
    <Header/>
      <div className='w-[40%] m-[10%] font-mono mx-auto border border-2 rounded-lg'>
        <h1 className='font-mono text-[2rem] mx-[40%] w-[100%]'>
          Login
        </h1>
        <input type='email' name='email' value={user.email} onChange={handleChange} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Email Address' />
        <input type='password' name='password' value={user.password} onChange={handleChange} className='w-[90%] p-2 mt-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Password' />
        <h1 className='text-blue-400 mx-[4%] mb-5'>Forget Password</h1>
        <div className='flex w-[100%]'>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] text-white rounded-[10px] bg-black' onClick={Submit}>Login</button>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mr-[4%] w-[90%] text-white rounded-[10px] bg-red-600'><Link href={'/Component/user/signup'}>Sign Up</Link> </button>

        </div>
        <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] rounded-[10px] flex  bg-slate-200 justify-around'><FcGoogle size={20} /><b className='mx-8'>Google</b></button>
        <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%]  rounded-[10px] flex  bg-slate-200 justify-around'><AiFillFacebook size={20} /><b className='mx-8'>FaceBook</b></button>




      </div>
<Footer/>
      
    </>
  )
}

export default Login
