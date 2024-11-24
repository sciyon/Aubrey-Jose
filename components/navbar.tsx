import Link from 'next/link'
import React from 'react'
import { cormorant } from '@/app/fonts';

const navbar = () => {
  return (
    <nav className="text-center mt-4"> 
      <Link href='/' className={`${cormorant.className} text-7xl py-6`}>Aubrey & Jose</Link>

      <div className="flex flex-row justify-center font-crimson gap-12 text-2xl pt-4">
        <Link href='/'>Home</Link>
        <Link href='/schedule'>Schedule</Link>
        <Link href='/attire'>Attire</Link>
        <Link href='/rsvp'>RSVP</Link>
        <Link href='/gifts'>Gifts</Link>
        <Link href='/entourage'>Entourage</Link>
      </div>
    </nav>
  )
}

export default navbar