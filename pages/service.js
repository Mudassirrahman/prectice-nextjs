import React from 'react'
import Link from 'next/link'
import Navbar from '../component/Navbar'

function service() {
    return (
        <div>
            <style jsx>{`

            .serviceHading{
                cursor:pointer;
            }
            
            `}</style>

            <div className='container text-center mt-5'>
                <div className='row justify-content-between'>
                    <div className='col-3 mt-3 mx-1 px-3 border-1 rounded-3 bg-dark text-white'>
                        <Link href="/myServicess/about HTML" className=''><h1 className='serviceHading'>HTML</h1></Link>
                    </div>
                    <div className='col-3 mt-3 mx-1 px-3 border-1 rounded-3 bg-dark text-white'>
                        <Link href="/myServicess/about CSS" className=''><h1 className='serviceHading'>CSS</h1></Link>
                    </div>
                    <div className='col-3 mt-3 mx-1 px-3 border-1 rounded-3 bg-dark text-white'>
                        <Link href="/myServicess/about Bootstrap" className=''><h1 className='serviceHading'>Bootstrap</h1></Link>
                    </div>
                    <div className='col-3 mt-3 mx-1 px-3 border-1 rounded-3 bg-dark text-white'>
                        <Link href="/myServicess/about Java script" className=''><h1 className='serviceHading'>Java Script</h1></Link>
                    </div>
                    <div className='col-3 mt-3 mx-1 px-3 border-1 rounded-3 bg-dark text-white'>
                        <Link href="/myServicess/about React js" className=''><h1 className='serviceHading'>React js</h1></Link>
                    </div>
                    <div className='col-3 mt-3 mx-1 px-3 border-1 rounded-3 bg-dark text-white'>
                        <Link href="/myServicess/about Next.js" className=''><h1 className='serviceHading'>Next.js</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default service