import React from 'react'
import Footer from '@/components/footer'
import Altnav from '../../components/altnav';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className='font-work-sans'>
        <Altnav />
        {children}
        <Footer />
    </main>
  )
}

export default layout