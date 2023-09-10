'use client'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import Login from '../login/page'
import Header from '../../Header'
import Footer from '../../footer'

function Signup() {
  const router = useRouter()
  let [confrim,setconfrom]=useState('')
  let [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    image:""

  })
  const handleChange = (e) => {
    console.log(e.target.name)
    setuser({ ...user, [e.target.name]: e.target.value })


  }

  let Submit = () => {
    // let data = JSON.stringify(user);
    if(user.password===confrim){
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/user/signup',
        headers: {
          'Content-Type': 'application/json'
        },
        data: user
      };
  
      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          alert(response.data.message)
          router.push('/Component/user/login')
        })
        .catch((error) => {
          console.log(error);
        });

    }else{
      alert("Password or Confirm is not match")
    }
    

  }
  return (
    <>
    <Header/>
      <div className='w-[40%] m-[10%] font-mono mx-auto border border-2 rounded-lg'>
        <h1 className='font-mono text-[2rem] mx-[40%] w-[100%]'>
          Sign Up
        </h1>
        <input type='text' name='name' required onChange={handleChange} value={user.name} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Name' />
        <input type='email' name='email' required onChange={handleChange} value={user.email} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Email Address' />
        <input type='password' name='password' required onChange={handleChange} value={user.password} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Password' />
        <input type='password' name='password' onChange={(e)=>setconfrom(e.target.value)} value={confrim} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='confrin Password' />
        <input type='text' name='image' required onChange={handleChange} value={user.image} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Password' />
        {/* <h1 className='text-blue-400 mx-[4%] mb-5'>Forget Password</h1> */}
        <div className='flex w-[100%]'>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] text-white rounded-[10px] bg-black'>
            <Link href={'/Component/user/login'}>Login</Link>
          </button>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mr-[4%] w-[90%] text-white rounded-[10px] bg-red-600' onClick={Submit}>Sign Up</button>

        </div>
        <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] rounded-[10px] flex  bg-slate-200 justify-around'><FcGoogle size={20} /><b className='mx-8'>Google</b></button>
        <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%]  rounded-[10px] flex  bg-slate-200 justify-around'><AiFillFacebook size={20} /><b className='mx-8'>FaceBook</b></button>
      </div>
      <Footer/>
    </>
  )
}

export default Signup

