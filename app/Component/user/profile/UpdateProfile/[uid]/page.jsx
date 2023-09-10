'use client'
import React, { useEffect } from 'react'
import { useState } from "react"
import Footer from '../../../../footer'
import Header from '../../../../Header'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function UpDateProfile(params) {
    console.log(params.params.uid)
    let id=localStorage.getItem('uid')
    let routess=useRouter()
    // const router = useRouter()
    let [user, setuser] = useState({
        name: "",
        email: "",
        password:"",
        image:""
        
    })
    const handleChange = (e) => {
        console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/user/profile/${params.params.uid}`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data.data));
            setuser(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });
          
    },[])

let Submit=()=>{
    
let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://localhost:3000/api/user/profile/${params.params.uid}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : user
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    alert('update')
    routess.push('/Component/user/profile')


  })
  .catch((error) => {
    console.log(error);
  });
  
}
    return (
        <>
            <Header />
            <div className='w-1/2 mx-auto h-screen mt-[4%]'>
                <h1 className='font-mono text-[2rem] mx-[40%] w-[100%]'>
                    Update Blog
                </h1>
                <input type='text' name='name' value={user.name} onChange={handleChange}  className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Enter Name' />
                <input type='text' name='email' value={user.email} onChange={handleChange}  className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Email Description' />
                <input type='password' name='password' value={user.password} onChange={handleChange}  className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Email Description' />
                <input type='text' name='image' value={user.image} onChange={handleChange}  className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Email Description' />
                {/* <h1 className='text-blue-400 mx-[4%] mb-5'>Forget Password</h1> */}
                <div className='flex w-[100%]'>
                    <button onClick={Submit} className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] text-white rounded-[10px] bg-black'>
                        Add Data
                    </button>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default UpDateProfile
