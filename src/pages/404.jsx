import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    },[])
  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>Go back <Link href='/'>Home</Link></h2>
    </div>
  )
}

export default NotFound
