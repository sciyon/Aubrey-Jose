import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className="text-center"> 
      <Link href='/' className='text-7xl font-cormorant'>Aubrey & Jose</Link>

      <div className="flex flex-row justify-center font-crimson gap-12 text-xl">
        <Link href='/'>Home</Link>
        <Link href='/schedule'>Schedule</Link>
        <Link href='/attire'>Attire</Link>
        <Link href='/entourage'>Entourage</Link>
        <Link href='/rsvp'>RSVP</Link>
        <Link href='/faq'>FAQ</Link>
      </div>
    </nav>
  )
}

export default navbar