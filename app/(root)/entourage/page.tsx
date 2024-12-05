import { cormorant } from '@/app/fonts'
import React from 'react'

const sponsors = {
  'Mr. Reynaldo B. Ramirez': 'Mrs. Angeline L. Ramirez',
  'Mr. Johnny M. Indus': 'Mrs. Marilou M. Indus',
  'Mr. Erwin Cabural': 'Mrs. Sharon Cabural',
  'Engr. Dennis C. Apatan': 'Mrs. Bernadette B. Apatan',
  'Mr. Mariano A. Villanueva II': 'Mrs. Nacille Consuelo V. Villanueva',
  'Mr. Jingle Dapin': 'Ms. Xenia M. Nazareno',
  'Mr. Noel L. De Castro': 'Mrs. Gemma T. De Castro',
  'Atty Procopio C. Lao VII': 'Ms. Nancy B. Tumala',
  'Mr. Primo C. Dolor Jr': 'Mrs. Cynthia S. Dolor',
  'Mr. Raymundo C. Dolor': 'Mrs. Leonila G. Dolor',
  'Mr. Fancisco S. Manlangit': 'Engr. Teresa Z. Manlangit',
  'Mr. Renato L. Zapatos': 'Mrs. Artemia A. Zapatos',
  'Dr. Jose O. Robillos': 'Mrs. Charry E. Robillos',
  'Mr. Francis Alberto D. Fabe': 'Mrs. Seny Fe B. Fabe',
  'Mr. Arturo A. Sanchez': 'Ms. Daisylain B. Badilla',
  'Mr. Joseph Anthony Manongas': 'Mrs. Marycris Q. Manongas',
  'Mr. Virgilio Q. Yu': 'Mrs. Sarah A. Yu',
  'Mr. Luis A. Jainga': 'Mrs. Cleopatra B. Jainga',
  'Mr. Nestor M. Repolledo': 'Ms. Maria Lucy R. Cabalit'
};

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
          <h1>Mr. Alberto C. Dolor</h1>
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
            {Object.entries(sponsors).map(([male, female]) => (
              <tr key={male}>
                <td className="text-right pr-4">{male}</td>
                <td className="text-left pl-4">{female}</td>
              </tr>
            ))}
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