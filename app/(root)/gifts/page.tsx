import Image from "next/image"

const page = () => {
  return (
    <div className='flex flex-col items-center'>

      <div className="font-crimson flex flex-col items-center lg:w-1/3 text-center lg:text-2xl text-lg lg:p-5 lg:pt-10 pt-5">
        <p>With hearts full of love, we are blessed.</p>
        <p>Your presence is our only request.</p>
        <p>But should you wish to give more;</p>
        <p>a <strong>monetary gift</strong>, we humbly implore.</p>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-start mt-2">

        <div className="w-full flex flex-col items-center justify-center h-fit">
          <div className="lg:text-3xl text-lg flex flex-col items-center font-crimson lg:pb-5 pt-2 lg:pt-5">
            <h1><strong>Landbank:</strong></h1>
            <h1><strong>Aubrey Antepuesto</strong></h1>
            <h1>0157-2232-16</h1>
          </div>
          <Image 
            src='/landbank.jpg' // Path to your SVG file
            alt='wedding cake'
            width={300} // Set the desired width
            height={300} // Set the desired height
            className="lg:mr-12 w-5/6 lg:h-3/4 lg:w-fit lg:ml-12 lg:mb-8"
          />
        </div>
        
        <div className="w-full flex flex-col items-center justify-start h-fit">
          <div className="lg:text-3xl text-lg flex flex-col items-center font-crimson lg:pb-5 pt-5 lg:pt-8">
            <h1><strong>GCash:</strong></h1>
            <h1><strong>Aubrey A.</strong></h1>
            <h1>0927-954-0832</h1>
          </div>
          <Image 
            src='/gcash.png' // Path to your SVG file
            alt='wedding cake'
            width={300} // Set the desired width
            height={300} // Set the desired height
            className="lg:mr-12 w-5/6 lg:h-3/4 lg:w-fit lg:ml-12 lg:mb-8 mb-6"
          />
        </div>
      </div>
    </div>
  )
}

export default page