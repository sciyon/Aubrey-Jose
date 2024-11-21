import { Crimson_Pro, Cormorant_SC, Montserrat, Sevillana } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin'] })
const cormorant = Cormorant_SC({ 
    weight: '400',
    style: 'normal'
})
const montserrat = Montserrat({ subsets: ['latin'] })
const sevillana = Sevillana({
  weight: '400',
  style: 'normal',
})

export { crimson, cormorant, montserrat, sevillana}