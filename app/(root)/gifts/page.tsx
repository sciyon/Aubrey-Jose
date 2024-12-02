import Image from "next/image"

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="font-crimson flex flex-col items-center lg:w-1/3 text-center text-2xl p-5 pt-10">
        <p>With hearts full of love, we are blessed.</p>
        <p>Your presence is our only request.</p>
        <p>But should you wish to give more;</p>
        <p>a <strong>monetary gift</strong>, we humbly implore.</p>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center mt-2">
        <Image 
          src='/gcash.png' // Path to your SVG file
          alt='wedding cake'
          width={400} // Set the desired width
          height={400} // Set the desired height
          className="lg:mr-12 w-5/6 lg:h-3/4 lg:w-fit lg:ml-12"
        />
        <div className="text-3xl flex flex-col items-center font-crimson pb-10">
          <h1><strong>GCash:</strong></h1>
          <h1><strong>Aubrey A.</strong></h1>
          <h1>0927-954-0832</h1>
        </div>
      </div>
    </div>
  )
}

export default page