'use client'
import React,{useEffect, useState} from 'react'
import Header from '../Header'
import Footer from '../footer'
import axios from 'axios'
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import Link from "next/link";


function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  let [datas,setdata]=useState([])
  let [loading,setloading]=useState(false)
  useEffect(()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/blog',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.data));
      setdata(response.data.data)
      setloading(true)
    })
    .catch((error) => {
      console.log(error);
    });
  },[loading])

  const handlechange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // console.log(searchTerm)
    if(datas.length>=0){
      const results = datas.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchTerm(e.target.value);
    setSearchResults(results);
    }}

  return (

    <>
    <Header/>
    <input type='text' name='searchTerm'  onChange={handlechange} className='w-[90%] p-2 my-6 h-10 rounded-sm border border-gray-300 mx-auto block' placeholder='Search' />
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-4'>

      {/* ALL Blog */}
      {datas.length===0?
      <h1 className='h-screen'>Loading ....</h1>:
      loading?
      searchResults.length===0?
      datas.map((v,i)=>{
        return(
          <>
          <div className='border m-5 border-gray-400 p-5 '>
            <img className='h-[200px] w-[100%]' src={v.image}/>
            <h1 className='h-10 text-2xl font-bold text-stone-400 overflow-hidden'>{v.name}</h1>
            <h1 className='h-20 text-stone-400 overflow-hidden'>{v.description}</h1>
           <div className='flex justify-end'>
          
           </div>
            <div className='flex justify-between mt-5'>
                
                <div>
                    <h1 className='text-gray-600 text-2xl '> <AiOutlineLike/></h1>
                </div>
                <div>
                   
                    <h1 className='text-gray-600 text-2xl'><BiCommentDetail/></h1>
                </div>
                <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[40%] text-white rounded-[10px] bg-gray-300'>
                   <Link href={`/Component/AllBlog/${v._id}`}>See More</Link>     
                    </button>
            </div>
          </div>

          </>
        )
      })
      :
      searchResults.map((v,i)=>{
        return(
          <>
          <div className='border m-5 border-gray-400 p-5 '>
            <img className='h-[200px] w-[100%]' src={v.image}/>
            <h1 className='text-2xl font-bold text-stone-400 h-10 overflow-hidden'>{v.name}</h1>
            <h1 className='text-stone-400 h-20 overflow-hidden'>{v.description}</h1>
            <div className='  flex justify-between mt-5'>
                
                <div>
                    <h1 className='text-gray-600 text-2xl '> <AiOutlineLike/></h1>
                </div>
                <div>
                   
                    <h1 className='text-gray-600 text-2xl '><BiCommentDetail/></h1>
                </div>
            </div>
          </div>

          </>
        )
      })
      :
      <h1 className='h-screen'>loading...</h1>


    }
    </div>
    
    <Footer/>
    </>

  )
}

export default HomePage
