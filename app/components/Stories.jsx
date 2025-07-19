import React, { useState } from 'react'
import Image from 'next/image'
import StillquotePaul from "@/public/images/still-quote-Paul.png"
import StillquoteAmanda from "@/public/images/still-quote-Amanda.png"
import StillquoteTiara from "@/public/images/still-quote-Tiara.png"
import { IoStar } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const Stories = () => {

    const [activePerson, setActivePerson] = useState('Paul');
    const [isPlaying, setIsPlaying] = useState(false);

    const personData = {
        Paul: {
            image: StillquotePaul,
            label: 'Paul',
            videoUrl: "https://www.youtube.com/embed/pKy7cNtaJ0c?si=oelDkmO7bEhF7JHu",
        },
        Amanda: {
            image: StillquoteAmanda,
            label: 'Amanda',
            videoUrl: "https://www.youtube.com/embed/tF60HQo3vhU?si=x3NmuiayeNq4DRu1"
        },
        Tiara: {
            image: StillquoteTiara,
            label: 'Tiara',
            videoUrl: "https://www.youtube.com/embed/Mhkf_1o4v7s?si=jIld1VEeepZl7V-2"
        },
    }

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleChangePerson = (name) => {
        setActivePerson(name);
        setIsPlaying(false); // Reset video when changing person
    };

    return (
        <section className='w-full h-fit mt-14 md:mt-0 p-4 md:p-14 xl:p-28 flex gap-10 md:gap-0 flex-col-reverse md:flex-row justify-between md:items-center'>

            {/* stories section images  */}
            <div className='w-full md:w-[340px] flex flex-col-reverse md:flex-col gap-6 relative'>

                {/* play button (only show if not playing) */}
                {!isPlaying && (
                    <button
                        onClick={handlePlay}
                        className='absolute top-[40%] left-[42%] z-20 text-white text-6xl cursor-pointer'
                    >
                        <FaPlay />
                    </button>
                )}

                {/* conditional rendering: video or image */}
                <div className="w-full h-full rounded-2xl overflow-hidden">
                    {isPlaying ? (
                        <iframe
                            className="w-full h-[580px]"
                            src={personData[activePerson].videoUrl}
                            title={`YouTube video of ${activePerson}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <Image
                            src={personData[activePerson].image}
                            alt={`Still-quote-${activePerson} Image`}
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    )}
                </div>


                {/* person selector buttons */}
                <div className='flex justify-between'>
                    {Object.keys(personData).map((name) => (
                        <button
                            key={name}
                            onClick={() => handleChangePerson(name)}
                            className={`px-[24px] py-[12px] font-semibold rounded-4xl transition-all duration-300 cursor-pointer ${activePerson === name
                                    ? 'text-[#017848] ring-6 ring-[#017848]'
                                    : 'hover:text-[#017848] border border-zinc-300 hover:border-[#017848] hover:ring-5 ring-[#017848]'
                                }`}
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