import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

function MyservicesNo() {
  const router = useRouter();
  const { myserviceno } = router.query
  return (
    <>
      <div className='col-6 mx-auto mt-4'>
        <h1 className='text-center'>this is my service {myserviceno}</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi eveniet quasi doloremque amet eaque, molestias ullam veniam voluptatem doloribus, quae aperiam quod odit autem tempora modi facilis beatae quidem!</p>
      </div>
      <div className='text-center'>
      <Link href="/service"><button className='btn btn-outline-dark'>Back to services</button></Link>
      </div>
    </>
  )
}

export default MyservicesNo;