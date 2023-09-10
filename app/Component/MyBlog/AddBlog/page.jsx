'use client'
import React from 'react'
import { useState } from "react"
import Footer from '../../footer'
import Header from '../../Header'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function AddBlog() {
    let router=useRouter()
    // const router = useRouter()
    let id=localStorage.getItem('uid')
    let [user, setuser] = useState({
        name: "",
        description: "",
        image: "",
        userid:id
    })
    const handleChange = (e) => {
        console.log(e.target.name)
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const Submit = () => {

        // let config = {
        //     method: 'post',
        //     maxBodyLength: Infinity,
        //     url: 'http://localhost:3000/api/blog',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: user
        // };

        // axios.request(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        
let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/MyBlog',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : user
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    // alert('post')
    router.push('/Component/MyBlog')
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
                    Add Product
                </h1>
                <input type='text' name='name' onChange={handleChange} value={user.name} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Blog Title' />
                <input type='text' name='description' onChange={handleChange} value={user.description} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Blog Description' />
                <input type='text' name='image' onChange={handleChange} value={user.image} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='image url' />
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

export default AddBlog
