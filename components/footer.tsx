import { FaFacebook, FaFacebookMessenger } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'

const footer = () => {
  return (
    <div className="w-full font-crimson flex flex-row px-5 pb-5">
      <div className="pr-8">
        <p>Made by</p>
        <p className="text-2xl font-bold">Erwin Antepuesto</p>
        <p>Want a personalised website? Contact me.</p>
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <FaFacebook style={{ width: '30px', height: '30px' }} />
          <FaFacebookMessenger style={{ width: '30px', height: '30px' }} />
          <FaLinkedin style={{ width: '30px', height: '30px' }} />
        </div>
        <p>antepuesto.erwin@gmail.com</p>
        <p className="m-0 p-0">09171038539</p>
      </div>
    </div>
  )
}

export default footer