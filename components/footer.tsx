import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'
import Link from "next/link";

const footer = () => {
  return (
    <div className="w-full font-crimson flex flex-row px-5 pb-5">
      <div className="lg:pr-8 pr-2">
        <p className="lg:text-2xl text-xs">Made by</p>
        <p className="lg:text-2xl text-sm font-bold">Erwin Antepuesto</p>
        <p className="lg:text-lg text-xs">Want a personalised website? Contact me.</p>
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <Link href='https://www.facebook.com/erwin.nazareno.2024'><FaFacebook style={{ width: '30px', height: '30px' }} /></Link>
          <Link href='https://www.linkedin.com/in/erwinantepuesto/'><FaLinkedin style={{ width: '30px', height: '30px' }} /></Link>
        </div>
        <p className="lg:text-lg text-xs">antepuesto.erwin@gmail.com</p>
        <p className="m-0 p-0 lg:text-lg text-xs">09171038539</p>
      </div>
    </div>
  )
}

export default footer