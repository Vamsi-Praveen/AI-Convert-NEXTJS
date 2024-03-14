'use client'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scrollPos, setScrollPos] = useState({
        y: 0
    })
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        setScrollPos({ y: window.scrollY })

        if (scrollPos.y > 45) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPos])


    const style = scrolled ? "bg-white/[0.5] backdrop-blur-[3px] shadow-sm" : ''
    return (
        <header className={`fixed top-0 left-0 w-full md:px-20 py-4 px-5 z-50 transition-all delay-75 ease-in ${style}`}>
            <nav className='flex items-center justify-between'>
                <Link href={'/'}>
                    <h1 className='font-semibold tracking-wider text-xl'>AI&nbsp;<span className='text-red-500'>Convert.</span></h1></Link>
                <Link href={"https://github.com/Vamsi-Praveen"} target='_blank' >
                    <button className='border px-3 py-2 rounded-md bg-white shadow-sm font-medium text-black trackimg-wider flex items-center gap-1 group '>Github<ArrowUpRight size={20} className='group-hover:translate-x-[2px]' /></button>
                </Link>
            </nav>
        </header>
    )
}

export default Header