import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Navbar</h1>
      <ul>
        <li> <Link href='/'>Home</Link> </li>
        <li><Link href='/blog'>Blog</Link> </li>
        <li><Link href='/main/payment'>Payment</Link> </li>
        <li>Contacts</li>
      </ul>
    </div>
  )
}

export default Navbar
