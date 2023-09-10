'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Footer from '../../footer'
import axios from 'axios'
import Link from 'next/link'

function Profile() {
    let id = localStorage.getItem("uid")
    let [data, setdata] = useState([])
    let [loading, setloading] = useState(false)
    console.log(id)
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/user/profile/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data.data);
                setdata(response.data.data)
                setloading(true)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [loading])
    return (
        < >
            <Header />

            <div className='mt-[100px]'>
            <img className='w-[200px] mx-auto block h-[200px] rounded-[50%]' src={data['image']} alt="image"/>

            </div>

            <div className=' m-[5%] flex justify-around'>
                
                <div>
                    <h1 className='text-gray-600 text-2xl mb-10'> Name</h1>
                    <h1 className='text-gray-600 text-2xl mb-10'>Email</h1>
                </div>
                <div>
                    <h1 className='text-gray-600 text-2xl mb-10'>
                        {data['name']}</h1>
                    <h1 className='text-gray-600 text-2xl mb-10'>{data['email']}</h1>
                </div>
            </div>
            <div>
            <button className=' rounded-sm mx-auto block text-[1.2rem] p-2 mb-4  w-[30%] mx-auto text-white rounded-[10px] bg-black'><Link href={`/Component/user/profile/UpdateProfile/${id}`}>update data</Link></button>
 
            </div>

            <Footer />
        </>
    )
}

export default Profile
