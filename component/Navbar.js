import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
 <nav className='navbar navbar-expand-lg justify-content-md-center mt-3'>
                <ul className='navbar-nav'>
                    <li className='nav-item '><Link href="/"><a  className='nav-link px-4'>Home</a></Link></li>
                    <li className='nav-item '><Link href="/about"><a className='nav-link px-4'>about</a></Link></li>
                    <li className='nav-item '><Link href="/service"><a className='nav-link px-4'>Service</a></Link></li>
                    <li className='nav-item '><Link href="/gallery"><a className='nav-link px-4'>Gallery</a></Link></li>
                </ul>
            </nav>
    </>
  )
}

export default Navbar