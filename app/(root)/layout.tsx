import React from 'react'
import Footer from '@/components/footer'
import Altnav from '../../components/altnav';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className='font-work-sans min-h-screen flex flex-col'>
        <Altnav />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
    </main>
  )
}

export default layout