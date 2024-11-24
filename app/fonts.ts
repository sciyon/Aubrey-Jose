import { Crimson_Pro, Cormorant_SC, Montserrat, Sevillana, Homemade_Apple } from 'next/font/google'
import localFont from 'next/font/local'

const crimson = Crimson_Pro({ subsets: ['latin'] })

const cormorant = Cormorant_SC({ 
    subsets: ['latin'],
    preload: false,
    weight: '400',
    style: 'normal'
})

const montserrat = Montserrat({ subsets: ['latin'] })

const sevillana = Sevillana({
  weight: '400',
  style: 'normal',
})

const homeMadeApple = localFont({
  src: '/fonts/HomemadeApple-Regular.ttf'
})

export { crimson, cormorant, montserrat, sevillana, homeMadeApple}