'use client'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Header from "../../Header";
import Footer from "../../footer";

function BlogDetial({params}) {
    let [data, setdata] = useState({})
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/blog/${params.blogItem}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setdata(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    return (
        <div>
            <Header/>
           <div className="h-screen mt-10">
           <div className='shadow-xl m-10 rounded-md mt-2 hover:scale-105 p-5  text-center'>
                <img className='w-[40%] h-[200px] mx-auto' src={data.image} />
                <h1 className='py-10 text-3xl font-bold'>{data.name}</h1>
                <h1 className='py-4 text-3xl font-bold'>{data.description}</h1>
                {/* <h1 className='py-2'>Lorem ipsum dolor sit.</h1>
                                        <h1 className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                                        <h1 className='py-2'>Lorem ipsum dolor sit amet.</h1> */}

            </div>
           </div>

            <Footer/>

        </div>
    )
}

export default BlogDetial
