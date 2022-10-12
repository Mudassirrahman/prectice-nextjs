import React from 'react'
import Image from 'next/image'
import Navbar from '../component/Navbar'

function gallery() {
    return (
        <div>
     
           
            <h1 className='container text-center mt-5'>
                i am gallery
            </h1>
            <div  className='mx-auto mt-3 text-center'>
                 <Image src="/DSC_0041.jpg" width="300" height="400"></Image>
            </div>
           
        </div>
    )
}

export default gallery