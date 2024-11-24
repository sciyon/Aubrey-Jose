import Image from "next/image"
import { cormorant } from '@/app/fonts';

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className={`${cormorant.className} text-6xl py-3`}>Gifts</h1>
      <div className="pt-2 font-crimson flex flex-col items-center w-1/3 text-center text-2xl">
        <p>With hearts full of love, we are blessed.</p>
        <p>Your presence is our only request.</p>
        <p>But should you wish to give more;</p>
        <p>a <strong>monetary gift</strong>, we humbly implore.</p>
      </div>
      <div className="flex flex-row items-center justify-center mt-2">
        <Image 
          src='/gcash.png' // Path to your SVG file
          alt='wedding cake'
          width={400} // Set the desired width
          height={400} // Set the desired height
          className="mr-12"
        />
        <div className="text-3xl flex flex-col items-center font-crimson">
          <h1><strong>GCash:</strong></h1>
          <h1><strong>Aubrey A.</strong></h1>
          <h1>0917-954-0832</h1>
        </div>
      </div>
    </div>
  )
}

export default page