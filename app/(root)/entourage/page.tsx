import { cormorant } from '@/app/fonts'
import React from 'react'

const page = () => {
  return (
    <div className={`${cormorant.className} flex flex-col items-center lg:mt-6 p-3 lg:p-0 w-full`}>

      <div className="flex flex-row text-center lg:gap-12 gap-2 text-2xl">
        <div className="w-1/2">
          <h1 className='lg:text-5xl text-2xl pt-4 font-medium'>Aubrey Antepuesto</h1>
          <h1 className='lg:text-4xl text-xl'>Bride</h1>
        </div>
        <div className="w-1/2">
          <h1 className='lg:text-5xl text-2xl pt-4 font-medium'>Jose Alberto Z. Dolor</h1>
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

      <h1 className='title2 pt-4'>Principal Sponsors</h1>
      <div className="">
        <table className="w-full">
          <tbody className='align-top text-base lg:text-4xl'>
            <tr>
              <td className="text-right pr-4">Mr. Noel L. De Castro</td>
              <td className="text-left pl-4">Mrs. Gemma T. De Castro</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Primo C. Dolor Jr</td>
              <td className="text-left pl-4">Mrs. Cynthia S. Dolor</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Atty Procopio C. Lao VII</td>
              <td className="text-left pl-4">Ms. Nancy B. Tumala</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Raymundo C. Dolor</td>
              <td className="text-left pl-4">Mrs. Leonila G. Dolor</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Fancisco S. Manlangit</td>
              <td className="text-left pl-4">Engr. Teresa Z. Manlangit</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Renato L. Zapatos</td>
              <td className="text-left pl-4">Mrs. Artemia A. Zapatos</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Dr. Jose O. Robillos</td>
              <td className="text-left pl-4">Mrs. Charry E. Robillos</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Francis Alberto D. Fabe</td>
              <td className="text-left pl-4">Mrs. Seny Fe B. Fabe</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Arturo A. Sanchez</td>
              <td className="text-left pl-4">Ms. Daisylain B. Badilla</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Joseph Anthony Manongas</td>
              <td className="text-left pl-4">Ms. Marycris Q. Manongas</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Reynaldo Ramirez</td>
              <td className="text-left pl-4">Mrs. Angeline L. Ramirez</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Johnny M. Indus</td>
              <td className="text-left pl-4">Mrs. Marilou M. Indus</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Erwin Cabural</td>
              <td className="text-left pl-4">Mrs. Sharon Cabural</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Engr. Dennis C. Apatan</td>
              <td className="text-left pl-4">Mrs. Bernadette B. Apatan</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Villanueva</td>
              <td className="text-left pl-4">Mrs. Nacille Villanueva</td>
            </tr>
            <tr>
              <td className="text-right pr-4">Mr. Jingle Dapin</td>
              <td className="text-left pl-4">Ms. Xenia M. Nazareno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-row text-center lg:gap-12 gap-3">
        <div className="w-1/2">
          <h1 className='name2'>Lady Jane N. Peñaflor</h1>
          <h1 className='title2'>Matron of Honor</h1>
        </div>
        <div className="w-1/2">
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