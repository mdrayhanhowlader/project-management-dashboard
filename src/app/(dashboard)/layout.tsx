'use client'
import Sidebar from '@/components/sidebar'
import React from 'react'

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-12 h-screen'>
        <div className='col-span-2'>
            <Sidebar />
        </div>
        <div className='col-span-10 bg-red-400'>{children}</div>
    </div>
  )
}

export default DasboardLayout