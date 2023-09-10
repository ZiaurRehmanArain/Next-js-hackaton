'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai'
function Header() {
    let routers = useRouter()

    const [toggle, settoggle] = useState(false)
    let login = localStorage.getItem('islogin')
    // // if(login==null){
    // //     login=true
    // // }else{
    // //     login=false
    // // }
    // let [login,setlogin]=useState(false)
    // useEffect(()=>{


    // },[])

    let logout = () => {
        localStorage.setItem('islogin', false)
        // setlogin(true)


    }
    let logouts = () => {
        localStorage.clear()
        routers.push('/Component/user/login')
    }

    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240] flex items-center py-[15px] justify-between  mx-auto'>
                <div className='text-3xl font-bold text-white'>
                    Blogger
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => settoggle(!toggle)} className='text-white text-2xl  ' />
                        :
                        <AiOutlineMenu onClick={() => settoggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }
                <ul className='hidden md:flex text-white gap-5'>
                    <li><Link href={'/'}>Home</Link> </li>
                    <li> <Link href={'/Component/AllBlog'}>All Blog</Link></li>
                    {login ?
                        <>
                            <li><Link href={'/Component/MyBlog'}>My Blog</Link></li>

                            <li ><button onClick={logouts} className='p-2 border border-blue-700 rounded-2xl hover:bg-blue-400 focus:bg-blue-500'>Logout</button> </li>
                            <li ><Link href={"/Component/user/profile"} ><AiOutlineUserAdd /></Link> </li>
                        </> :
                        <>
                            <li className='p-2 border border-blue-700 rounded-2xl hover:bg-blue-400 focus:bg-blue-500'><Link href={"/Component/user/login"}>Login</Link> </li>
                            <li className='p-2 border border-blue-700 rounded-2xl hover:bg-blue-400 focus:bg-blue-500'><Link href={"/Component/user/signup"}>Signup</Link></li>
                        </>
                    }

                </ul>
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[97px] ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
                    <li className='p-3'><Link href={'/'}>Home</Link> </li>
                    <li className='p-3'> <Link href={'/Component/AllBlog'}>All Blog</Link></li>
                    {login ?
                        <>
                            <li className='p-3'><Link href={'/Component/MyBlog'}>My Blog</Link></li>

                            <li className='p-3'><button onClick={logouts}>Logout</button> </li>
                            <li className='p-3'><Link href={"/Component/user/profile"} ><AiOutlineUserAdd /></Link> </li>
                        </> :
                        <>
                            <li className='p-3'><Link href={"/Component/user/login"}>Login</Link> </li>
                            <li className='p-3'><Link href={"/Component/user/signup"}>Signup</Link></li>
                        </>
                    }
                    {/* <li className='p-3'>Home</li>
                    <li className='p-3'>Company</li>
                    <li className='p-3'>Resources</li>
                    <li className='p-3'>About</li>
                    <li className='p-3'>Contact</li> */}
                </ul>

            </div>
        </div>
    )
}

export default Header
