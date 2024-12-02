import { cormorant } from '@/app/fonts'
import React from 'react'

const page = () => {
  return (
    <div className={`${cormorant.className} flex flex-col items-center lg:mt-6 p-3 lg:p-0`}>

      <div className="flex flex-row text-center lg:gap-12 gap-2 text-2xl">
        <div className="w-1/2">
          <h1 className='lg:text-5xl text-2xl pt-4'><strong>Aubrey Antepuesto</strong></h1>
          <h1 className='lg:text-4xl text-xl'>Bride</h1>
        </div>
        <div className="w-1/2">
          <h1 className='lg:text-5xl text-2xl pt-4'><strong>Jose Alberto Z. Dolor</strong></h1>
          <h1 className='lg:text-4xl text-xl'>Groom</h1>
        </div>
      </div>

      <div className="flex flex-row lg:gap-16 gap-2  text-center">
        <div className="name2 w-1/2">
          <h1>Engr. Erwin U. Bentulan</h1>
          <h1>Mrs. Ann N. Bentulan</h1>
        </div>
        <div className="name2 w-1/2">
          <h1>Mr. Albert C. Dolor</h1>
          <h1>Mrs. Vivian Z. Dolor</h1>
        </div>
      </div>
      <h1 className='title2'>Parents of the Bride and Groom</h1>

      <h1 className='name2'>Rev. Fr. Reynaldo I. Pernia</h1>
      <h1 className='title2'>Officiant</h1>

      <h1 className='title3'>Principal Sponsors</h1>
      <div className="flex flex-row lg:gap-12 gap-3 name3">
        <div className="w-1/2  text-right ">
          <h3>Mr. Noel L. De Castro</h3>
          <h3>Mr. Primo C. Dolor Jr</h3>
          <h3>Atty Procopio C. Lao VII</h3>
          <h3>Mr. Raymundo C. Dolor</h3>
          <h3>Mr. Fancisco S. Manlangit</h3>
          <h3>Mr. Renato L. Zapatos</h3>
          <h3>Dr. Jose O. Robillos</h3>
          <h3>Mr. Francis Alberto D. Fabe</h3>
          <h3>Mr. Arturo A. Sanchez</h3>
          <h3>Mr. Joseph Anthony Manongas </h3>
          <h3>Mr. Reynaldo Ramirez</h3>
          <h3>Mr. Johnny M. Indus </h3>
          <h3>Mr. Erwin Cabural</h3>
          <h3>Engr. Dennis C. Apatan</h3>
          <h3>Mr. Villanueva</h3>
          <h3>Mr. Jingle Dapin</h3>


        </div>
        <div className="w-1/2  text-left ">
          <h3>Mrs. Gemma T. De Castro</h3>
          <h3>Mrs. Cynthia S. Dolor</h3>
          <h3>Ms. Nancy B. Tumala</h3>
          <h3>Mrs. Leonila G. Dolor</h3>
          <h3>Engr. Teresa Z. Manlangit</h3>
          <h3>Mrs. Artemia A. Zapatos</h3>
          <h3>Mrs. Charry E. Robillos</h3>
          <h3>Mrs. Seny Fe B. Fabe</h3>
          <h3>Ms. Daisylain B. Badilla</h3>
          <h3>Ms. Marycris Q. Manongas</h3>
          <h3>Mrs. Angeline L. Ramirez</h3>
          <h3>Mrs. Marilou M. Indus</h3>
          <h3>Mrs. Sharon Cabural</h3>
          <h3>Mrs. Bernadette B. Apatan</h3>
          <h3>Mrs. Nacille Villanueva</h3>
          <h3>Ms. Xenia M. Nazareno</h3>
        </div>
      </div>

      <div className="flex flex-row text-center gap-12">
        <div className="">
          <h1 className='name2'>Lady Jane N. Peñaflor</h1>
          <h1 className='title2'>Matron of Honor</h1>
        </div>
        <div className="">
          <h1 className='name2'>Keith Christian Maerly Bañaga</h1>
          <h1 className='title2'>Best Man</h1>
        </div>
      </div>

      
      <h1 className='name2'>Carl Daniel S. Paner</h1>
      <h1 className='title2'>Bible Bearer</h1>
      
      <h1 className='name2'>Abbi Neil Bigno</h1>
      <h1 className='title2'>Ring Bearer</h1>
      
      <h1 className='name2'>Paolo D. Penkian</h1>
      <h1 className='title2'>Coin Bearer</h1>
      
      <h1 className='lg:text-4xl text-lg pt-12'>Alexandra Criste N. Bajade</h1>
      <h1 className='lg:text-4xl text-lg'>Abegail N. Bajade</h1>
      <h1 className='lg:text-4xl text-lg'>Cleah Franzine C. Nazareno</h1>
      <h1 className='lg:text-4xl text-base lg:pt-12 pt-2 pb-4'>Flower Girls</h1>
      

    </div>
  )
}

export default page