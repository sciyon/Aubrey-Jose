import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-cormorant text-6xl py-6'>Dress Code</h1>
      <div className="flex flex-row pb-12">
        <div className="flex flex-col items-center">
          <Image 
            src='/girl.png' // Path to your SVG file
            alt='women outfit'
            width={400} // Set the desired width
            height={400} // Set the desired height
          />
          <h1 className='text-4xl font-crimson'>Filipiniana</h1>
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <div className="bg-[#ffffc5] w-24 h-24"></div>
          <div className="bg-[#cfb97d] w-24 h-24"></div>
          <div className="bg-[#b48b1a] w-24 h-24"></div>
          <div className="bg-[#a6a6a6] w-24 h-24"></div>
        </div>
        <div className="flex flex-col items-center">
          <Image 
            src='/boy.png' // Path to your SVG file
            alt='women outfit'
            width={400} // Set the desired width
            height={400} // Set the desired height
          />
          <h1 className='text-4xl font-crimson'>Barong and Black Slacks</h1>
        </div>
      </div>
    </div>
  )
}

export default page