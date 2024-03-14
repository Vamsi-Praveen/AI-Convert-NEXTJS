'use client'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer className='px-2 py-6 border-t border-t-slate-200 flex items-center justify-between'>
            <div className='space-y-2'>
                <Link href={'/'}>
                    <h1 className='font-semibold tracking-wider text-2xl'>AI&nbsp;<span className='text-red-500'>Convert.</span></h1>
                    <p className='text-xs'>Build with ❤ by Vamsi.</p>
                </Link>
                <p className='text-sm'>&copy;&nbsp;Copyright {new Date().getFullYear()} | All Rights Reserved</p>
            </div>
            <div className='bg-red-500 h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer shadow-xl' onClick={handleClick}>
                <ArrowUp color='white' />
            </div>
        </footer>
    )
}

export default Footer