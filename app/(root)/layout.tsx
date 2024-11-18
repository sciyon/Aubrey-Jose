import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className='font-work-sans'>
        <Navbar />
        {children}
        <Footer />
    </main>
  )
}

export default layout