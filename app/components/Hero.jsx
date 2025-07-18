import React from 'react'
import Image from 'next/image'
import Aipoweredfico from "@/public/images/ai-powered-fico.png"
import { RiTimerLine } from "react-icons/ri";

const Hero = () => {
    return (
        <main className='mb-10 bg-gradient-to-b from-[#004733] to-[#007050]'>
            <section className='h-screen w-full mt-10 md:mt-[68px] flex gap-8 flex-col justify-center items-center'>

                {/* hero title */}
                <div className='text-center'>
                    <h1 className='text-6xl md:text-7xl xl:text-8xl font-bold text-white'>The first</h1>
                    <h1 className='text-6xl md:text-7xl xl:text-8xl font-bold text-white flex flex-col md:flex-row md:gap-6'>
                        <span className='bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent'>
                            AI-powered
                        </span>
                        Mortgage
                    </h1>
                </div>

                {/* discreption */}
                <p className='px-4 text-xl md:text-2xl text-white text-center'>Our tech unlocks lower rates, higher chances of approval, <br />
                    and a lightning‑fast process from approval to closing. Over $100 billion funded.
                </p>

                {/* start approval button */}
                <div className='text-center flex flex-col gap-4'>

                    <button className='px-10 py-5 text-[#292b29] font-semibold bg-[#1EE07F] hover:text-white hover:bg-[#004733] hover:bg-opacity-90 rounded-4xl transition-all duration-300 cursor-pointer'>
                        Start my pre-approval
                    </button>

                    {/* title */}
                    <p className='text-[12px] font-extralight text-[#DFE0DC] flex gap-1 justify-center items-center'>
                        <span className='text-lg'>
                            <RiTimerLine />
                        </span>
                        3 min | No hard credit check
                    </p>

                </div>

            </section>

            {/* hero image */}
            <div className='-mt-24 px-4 w-full h-fit flex justify-center items-center'>
                <Image src={Aipoweredfico} alt="Aipoweredfico image" className='mt-12 w-[500px]' />
            </div>

        </main>
    )
}

export default Hero