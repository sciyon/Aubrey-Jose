import Image from 'next/image'
import { homeMadeApple } from '@/app/fonts'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className={`${homeMadeApple.className} lg:text-6xl text-3xl lg:mt-14 lg:mb-16 mt-5 mb-3 pt-10`}><span className='hidden lg:text-6xl'>Saturday,</span> January 18, 2025</h1>
      <span className={`${homeMadeApple.className} lg:hidden text-3xl mb-5`}>Saturday,</span>
      <div className="flex lg:flex-row flex-col p-4 w-full">
        <Image 
          src='/church.jpg' // Path to your SVG file
          alt='wedding cake'
          width={500} // Set the desired width
          height={400} // Set the desired height
          className='rounded-3xl w-1/3 ml-12'
        />
        <div className="flex flex-col items-center justify-center w-full">
          <Image 
            src='/rings.svg' // Path to your SVG file
            alt='wedding cake'
            width={100} // Set the desired width
            height={100} // Set the desired height
          />
          <h2 className='text-5xl font-crimson'>Ceremony</h2>
          <h3 className='text-2xl font-crimson'>1:00 pm - 4:00 pm</h3>

          <div className="default-text flex flex-col items-center lg:w-1/3 w-5/6 text-center">
            <h3>Holy Cross Parish</h3>
            <h3>Talairon, Oroquieta City</h3>

            <p className='pt-3 text-base lg:text-lg'>Please arrive at the ceremony by 12:30 pm to ensure you are
            comfortably seated before the ceremony begins promptly at 1 pm.</p>
            <p className='pt-2 pb-4 text-base lg:text-lg'>Click the link below to get the location of the ceremony.</p>
          </div>
          <a href='https://maps.app.goo.gl/LfH5rezAFJjQfdgbA' target='_blank' rel='noopener noreferrer'>
            <button className='bg-brown text-white text-xl w-fit h-12 py-2 px-4 rounded-xl mb-12 hover:bg-lightbrown'>Ceremony Location</button>
          </a>
        </div>
      </div>


      <Image 
        src='/cake.svg' // Path to your SVG file
        alt='wedding cake'
        width={90} // Set the desired width
        height={90} // Set the desired height
      />
      <h2 className='text-5xl font-crimson'>Reception</h2>
      <h3 className='text-2xl font-crimson'>4:30 pm onwards</h3>

      <div className="default-text flex flex-col items-center lg:w-1/3 w-5/6  text-center">
        <h3>Costa Del Sol</h3>
        <h3>Independence St, Oroquieta City</h3>

        <p className='pt-3 text-base lg:text-lg'>We can&apos;t wait to celebrate with you!</p>
        <p className='pt-3 text-base lg:text-lg'>Our dinner reception is only a ten-minute drive from the ceremony.</p>
        <p className='pt-3 text-base lg:text-lg pb-4'>Click the link below to get the location of the reception.</p>
      </div>
      <a href='https://maps.app.goo.gl/FkWHVZVZWmo2CWecA' target='_blank' rel='noopener noreferrer'>
        <button className='bg-brown text-white text-xl w-fit h-12 py-2 px-4 rounded-xl mb-12 hover:bg-lightbrown'>Reception Location</button>
      </a>
    </div>
  )
}

export default page