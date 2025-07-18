import React, { useState } from 'react'
import Image from 'next/image'
import StillquotePaul from "@/public/images/still-quote-Paul.png"
import StillquoteAmanda from "@/public/images/still-quote-Amanda.png"
import StillquoteTiara from "@/public/images/still-quote-Tiara.png"
import { IoStar } from "react-icons/io5";

const Stories = () => {

    const [activePerson, setActivePerson] = useState('Paul')

    const personData = {
        Paul: {
            image: StillquotePaul,
            label: 'Paul',
        },
        Amanda: {
            image: StillquoteAmanda,
            label: 'Amanda',
        },
        Tiara: {
            image: StillquoteTiara,
            label: 'Tiara',
        },
    }

    return (
        <section className='w-full h-fit mt-14 md:mt-0 p-4 md:p-14 xl:p-28 flex gap-10 md:gap-0 flex-col-reverse md:flex-row justify-between md:items-center'>

            {/* stories section images  */}
            <div className='w-full md:w-[340px] flex flex-col-reverse md:flex-col gap-6'>

                {/* image */}
                <Image
                    src={personData[activePerson].image}
                    alt={`Still-quote-${activePerson} Image`}
                    className='w-full h-full object-cover rounded-2xl'
                />


                {/* change stories buttons */}
                <div className='flex justify-between'>
                    {Object.keys(personData).map((name) => (
                        <button
                            key={name}
                            onClick={() => setActivePerson(name)}
                            className={`px-[24px] py-[12px] font-semibold rounded-4xl transition-all duration-300 cursor-pointer ${activePerson === name ? 'text-[#017848] ring-6 ring-[#017848]' : 'hover:text-[#017848] border border-zinc-300 hover:border-[#017848] hover:ring-5 ring-[#017848]'}`}
                        >
                            {name}
                        </button>
                    ))}

                </div>

            </div>

            {/* title */}
            <div className='flex flex-col gap-4'>

                <h1 className='text-[48px] leading-12 xl:text-[88px] font-semibold xl:leading-24'>Find out why <br /> we’re better.</h1>

                <button className='md:w-fit px-[48px] py-[20px] text-white font-semibold bg-[#005332] hover:bg-[#017848] rounded-4xl cursor-pointer transition-all duration-300'>
                    See all our stories
                </button>

                <div className='flex gap-4 justify-start items-center'>
                    <p className='font-normal flex gap-1 justify-center'>
                        <IoStar className='text-xl text-[#13e079]' />
                        Trustpilot
                    </p>
                    <p className=''>Excellent <span className='ml-2 font-normal'>4.4</span> <span className='text-zinc-500'>out of 5</span></p>
                </div>

            </div>

        </section>
    )
}

export default Stories