import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-[#2699fb] p-4  py-10 '>
            <div className='text-center text-white md:grid grid-cols-5  gap-5 '>
                <div className='my-5'>
                    <h1 className='text-3xl font-bold text-black'>Ecomerce</h1>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam enim doloribus aut quas</h1>
                    <div>
                        <ul className='flex'>
                            <li className='mx-2'>icon</li>
                            <li  className='mx-2'>icon</li>
                            <li  className='mx-2'>icon</li>
                            <li  className='mx-2'>icon</li>
                        </ul>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className='font-bold text-black'>
                    Solutions
                    </h1>
                    <ul>
                        <li>Solutions1</li>
                        <li>Solutions2</li>
                        <li>Solutions3</li>
                        <li>Solutions4</li>
                        <li>Solutions5</li>
                    </ul>
                </div>
                <div className='my-5'>
                    <h1 className='font-bold text-black'>
                    Support
                    </h1>
                    <ul>
                        <li>Support1</li>
                        <li>Support2</li>
                        <li>Support3</li>
                        <li>Support4</li>
                        <li>Support5</li>
                    </ul>
                </div>
                <div className='my-5'>
                    <h1 className='font-bold text-black'>
                    comapny
                    </h1>

                    <ul>
                        <li>compnay 1</li>
                        <li>compnay 2</li>
                        <li>compnay 3</li>
                        <li>compnay 4</li>
                        <li>compnay 5</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
