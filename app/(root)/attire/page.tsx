import React from 'react'
import Image from 'next/image';
import { cormorant } from '@/app/fonts';

const page = () => {
  return (
    <div className='flex flex-col items-center pt-10'>
      <div className="flex flex-row pb-12">
        <div className="flex flex-col items-center gap-y-6">
          <div className="bg-[#ffffc5] w-24 h-24"></div>
          <div className="bg-[#cfb97d] w-24 h-24"></div>
          <div className="bg-[#b48b1a] w-24 h-24"></div>
          <div className="bg-[#a6a6a6] w-24 h-24"></div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col items-center">
            <Image 
              src='/girl.png' // Path to your SVG file
              alt='women outfit'
              width={400} // Set the desired width
              height={400} // Set the desired height
              className='h-64 w-40 lg:h-3/4 lg:w-80 lg:ml-12'
            />
            <h1 className='lg:text-4xl text-2xl font-crimson'>Filipiniana</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src='/boy.png' // Path to your SVG file
              alt='women outfit'
              width={400} // Set the desired width
              height={400} // Set the desired height
              className='h-64 w-40 lg:h-3/4 lg:w-96'
            />
            <h1 className='lg:text-4xl text-2xl text-center font-crimson'>Barong and Black Slacks</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page