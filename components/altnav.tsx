"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { cormorant } from '@/app/fonts';
import { usePathname } from 'next/navigation';

const Altnav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Schedule', href: '/schedule'  },
    { id: 3, text: 'Attire', href: '/attire'  },
    { id: 4, text: 'Rsvp', href: '/rsvp'  },
    { id: 5, text: 'Gifts', href: '/gifts'  },
    { id: 6, text: 'Entourage', href: '/entourage' },
  ];
  const pathname = usePathname()

  return (
    <div className='flex lg:flex-col flex-row justify-between items-center min-w-max px-4 text-black relative z-50'>
      <Link href='/' className={`${cormorant.className} text-3xl py-3 lg:text-7xl lg:pt-6`}>
        Aubrey & Jose
      </Link>
      <ul className='hidden md:flex flex-row justify-center font-crimson gap-12 text-2xl pt-2'>
        {navItems.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className={pathname === item.href ? 'underline underline-offset-8 decoration-4' : ''}
          >
            {item.text}
          </Link>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} className='ml-auto' />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-black ease-in-out duration-500 flex flex-col pl-4 pt-4'
            : 'ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

        {navItems.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className= { nav ? `${cormorant.className} text-3xl text-white` : 'hidden' }
            onClick={() => setNav(false)} 
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Altnav;