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
      <h1 className='lg:text-4xl text-xl font-bold'>WEDDING ENTOURAGE</h1>

      <h1 className='lg:text-3xl text-lg pt-5 font-bold'>Officiant</h1>
      <h1 className='font-crimson lg:text-4xl text-lg font-light text-center'>Rev. Fr. Reynaldo I. Pernia</h1>

      <div className="flex flex-row text-center items-center justify-center lg:gap-6 gap-2 text-2xl lg:px-12 w-full">
        <div className="lg:w-1/4 w-1/2 p-3">
          <h1 className='lg:text-3xl text-lg lg:pt-4 font-bold'>Bride</h1>
          <h1 className='lg:text-4xl text-lg font-crimson font-light'>Aubrey Antepuesto</h1>
        </div>
        <div className="lg:w-1/4 w-1/2 p-3">
          <h1 className='lg:text-3xl text-xl lg:pt-4 font-bold'>Groom</h1>
          <h1 className='lg:text-4xl text-lg font-crimson font-light'>Jose Alberto Z. Dolor</h1>
        </div>
      </div>

      <div className="flex flex-row items-start justify-center lg:gap-16 gap-2 w-full text-center">
        <div className="lg:text-4xl text-lg font-crimson font-light p-3 lg:w-1/4 w-1/2 ">
          <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Parents of the Bride</h1>
          <h1>Engr. Erwin U. Bentulan</h1>
          <h1>Mrs. Ann N. Bentulan</h1>
        </div>
        <div className="lg:text-4xl text-lg font-crimson font-light p-3 lg:w-1/4 w-1/2 ">
          <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Parents of the Groom</h1>
          <h1>Mr. Alberto C. Dolor</h1>
          <h1>Mrs. Vivian Z. Dolor</h1>
        </div>
      </div>


      <h1 className='lg:text-3xl text-lg pt-5 font-bold'>Principal Sponsors</h1>
      <div className="">
        <table className="w-full">
          <tbody className='align-top text-base lg:text-4xl'>
            {Object.entries(sponsors).map(([male, female]) => (
              <tr key={male} className='lg:text-4xl text-lg font-crimson font-light w-full'>
                <td className="text-right pr-4 w-2/5">{male}</td>
                <td className="text-left pl-4 w-2/5">{female}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row text-center lg:gap-12 gap-3 pt-5 w-full  items-start justify-center">
        <div className=" w-1/3">
          <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Matron of Honor</h1>
          <h1 className='lg:text-4xl text-lg font-crimson font-light'>Lady Jane N. Peñaflor</h1>
        </div>
        <div className=" w-1/3">
          <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Best Man</h1>
          <h1 className='lg:text-4xl text-lg font-crimson font-light'>Keith Christian Maerly Bañaga</h1>
        </div>
      </div>

      
      <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Bible Bearer</h1>
      <h1 className='lg:text-4xl text-lg font-crimson font-light'>Carl Daniel S. Paner</h1>
      
      <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Ring Bearer</h1>
      <h1 className='lg:text-4xl text-lg font-crimson font-light'>Abbi Neil Bigno</h1>
      
      <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-4 font-bold`}>Coin Bearer</h1>
      <h1 className='lg:text-4xl text-lg font-crimson font-light'>Paolo D. Penkian</h1>
      
      <h1 className={`${cormorant.className} lg:text-3xl text-lg pt-5 font-bold`}>Flower Girls</h1>
      <h1 className='lg:text-4xl text-lg font-crimson font-light'>Alexandra Criste N. Bajade</h1>
      <h1 className='lg:text-4xl text-lg font-crimson font-light'>Abegail N. Bajade</h1>
      <h1 className='lg:text-4xl text-lg font-crimson font-light'>Cleah Franzine C. Nazareno</h1>
      

    </div>
  )
}

export default page