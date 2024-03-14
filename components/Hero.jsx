import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='py-44 md:py-52 px-5 md:px-20 z-20'>
            <div className='grid place-items-center mb-3'>
                <div className='border bg-white rounded-full px-2 py-1'>
                    <h1 className='text-xs'>Hey There,🖐</h1>
                </div>
            </div>
            <div className='grid place-items-center text-center gap-3'>
                <h1 className='text-3xl font-semibold tracking-wider md:text-4xl  max-w-md md:max-w-2xl'>Unlock Multilingual <span className='text-red-500'>Coding</span> with AI Magic.✨</h1>
                <p className='text-[16px] tracking-wider'>Effortless Translation Between Programming Languages</p>
            </div>
            <div className='grid place-items-center my-3'>
                <Link href="/#editor">
                    <button className='border px-3 py-2 rounded-md bg-red-500 font-medium text-white trackimg-wider flex items-center gap-1'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero