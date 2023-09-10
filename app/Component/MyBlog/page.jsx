'use client'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../footer'
import Link from 'next/link'
import axios from 'axios'

function MyBlog() {
    let [datas, setdata] = useState([])
    let [loading, setloading] = useState(false)
    let ids = localStorage.getItem('uid')

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/MyBlog/${ids}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                setloading(true)
                setdata(response.data.data)
                console.log(datas);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [loading])

    let submit = () => {
        // let config = {
        //     method: 'get',
        //     maxBodyLength: Infinity,
        //     url: 'http://localhost:3000/api/blog',
        //     headers: {}
        // };

        // axios.request(config)
        //     .then((response) => {
        //         setloading(true)
        //         setdata(response.data.data)
        //         console.log(datas);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/MyBlog/${ids}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                setloading(true)
                setdata(response.data.data)
                console.log(datas);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    let Delete = (id) => {
        // let ids = localStorage.getItem('uid')


        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/MyBlog/${ids}/${id}`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            submit();
          })
          .catch((error) => {
            console.log(error);
          });
          
        // console.log(id)
        // let config = {
        //     method: 'delete',
        //     maxBodyLength: Infinity,
        //     url: `http://localhost:3000/api/blog/${id}`,
        //     headers: {}
        // };

        // axios.request(config)
        //     .then((response) => {
        //         submit();
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });


    }
    return (
        <>
            <Header />
            <div className='h-full'>
                <div className='flex justify-end mx-10 mt-4'>
                    <button className='bg-blue-400 p-2 rounded-2xl hover:bg-blue-300 focus:bg-blue-500 text-white'>
                        <Link href={"/Component/MyBlog/AddBlog"}> Add data</Link>
                    </button>
                </div>
                <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-4'>

                    {
                    datas.isEmpty?
                    <h1>no data</h1>:
                    datas.length === 0 ?
                    
                        <h1 className='h-screen'> Loading....</h1> :
                        datas.map((v, i) => {
                            return (
                                <>
                                    <div className='shadow-xl rounded-md mt-2 hover:scale-105 p-5  text-center'>
                                        <img className='w-[100%] h-[200px]' src={v.image} />
                                        <h1 className='py-10 text-3xl font-bold h-20  overflow-hidden'>{v.name}</h1>
                                        <h1 className='py-4 text-3xl font-bold h-30 overflow-hidden'>{v.description}</h1>
                                        {/* <h1 className='py-2'>Lorem ipsum dolor sit.</h1>
                                        <h1 className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                                        <h1 className='py-2'>Lorem ipsum dolor sit amet.</h1> */}
                                        <button className='bg-green-500 my-5 hover:bg-green-400 focus:bg-green-600  m-2 px-10 py-2 rounded' >
                                            <Link href={`/Component/MyBlog/updateBlog/${v._id}`}> Updata </Link>
                                        </button>
                                        <button className='bg-red-500 my-5 hover:bg-red-400 focus:bg-red-600 m-2 px-10 py-2 rounded' onClick={(e) => Delete(v._id)}>delete</button>

                                    </div>
                                </>
                            )
                        })
                    }</div>
            </div>
            <Footer /></>
    )
}

export default MyBlog
