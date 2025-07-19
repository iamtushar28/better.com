import Image from 'next/image';
import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
import Aimortgage from "@/public/images/ai-mortgage.png"
import Onedaymortgage from "@/public/images/one-day-mortgage.png"
import Betterheloc from "@/public/images/better-heloc.png"
import Insurance from "@/public/images/insurance.png"


const QueriesSection = () => {
    return (
        <section className='p-4 md:p-10 pt-14 md:pt-0 w-full flex flex-col gap-8 md:gap-16'>

            <div className='flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:items-end'>

                {/* title */}
                <h2 className='text-5xl font-normal'>
                    Got questions? <br />
                    We've got answers
                </h2>

                {/* change queries section buttons */}
                <div className='flex md:justify-end w-full gap-4 overflow-x-scroll md:overflow-visible  px-2 py-4 md:px-0 md:py-0'>

                    <button className="px-[24px] py-[8px] h-fit font-semibold rounded-4xl transition-all duration-300 cursor-pointer text-[#017848] border border-[#017848] ring-5 ring-[#017848] text-nowrap">
                        Our products
                    </button>
                    <button className="px-[24px] py-[8px] h-fit font-semibold rounded-4xl transition-all duration-300 cursor-pointer hover:text-[#017848] border border-zinc-300 hover:border-[#017848] hover:ring-5 ring-[#017848]">
                        Calculator
                    </button>
                    <button className="px-[24px] py-[8px] h-fit font-semibold rounded-4xl transition-all duration-300 cursor-pointer hover:text-[#017848] border border-zinc-300 hover:border-[#017848] hover:ring-5 ring-[#017848] text-nowrap">
                        Guides & FAQs
                    </button>

                </div>

            </div>

            {/* cards section */}
            <div>

                <div className='w-full flex gap-5 flex-col md:flex-row justify-between'>

                    {/* card 1 */}
                    <div className='w-full md:w-[32%] h-fit p-6 md:px-10 md:py-8 bg-[#F0F7F1] rounded-lg flex flex-col gap-6'>

                        {/* title */}
                        <h4 className='text-2xl font-normal'>
                            How AI Mortgage <br />
                            Lending is Transforming the <br className='hidden md:block' />
                            Home Loan Process
                        </h4>

                        {/* next button */}
                        <button className='h-12 w-12 text-xl font-semibold hover:text-white border border-[#017848] hover:bg-[#017848] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300'>
                            <HiOutlineArrowRight />
                        </button>

                        {/* card image */}
                        <Image src={Aimortgage} alt='Aimortgage image' />

                    </div>

                    {/* card 2 */}
                    <div className='w-full md:w-[66%] md:h-[26.4rem] p-6 md:px-10 md:py-8 bg-[#F0F7F1] rounded-lg flex flex-col md:flex-row gap-5 md:gap-14 justify-between'>

                        <div className='flex flex-col gap-6'>
                            {/* title */}
                            <h4 className='text-2xl font-normal'>
                                One Day Mortgage1
                            </h4>

                            <p className='text-sm hidden md:block'>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.</p>

                            {/* next button */}
                            <button className='h-12 w-12 text-xl font-semibold hover:text-white border border-[#017848] hover:bg-[#017848] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300'>
                                <HiOutlineArrowRight />
                            </button>
                        </div>

                        {/* image */}
                        <Image src={Onedaymortgage} alt='Onedaymortgage' className='w-full md:w-[280px] h-auto' />


                    </div>

                </div>

                <div className='w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-6'>

                    {/* card 3 */}
                    <div className='w-full md:w-[66%] h-fit p-6 md:px-10 md:py-8 bg-[#F0F7F1] rounded-lg flex flex-col-reverse md:flex-row gap-4 md:gap-14 justify-between'>

                        {/* image */}
                        <Image src={Betterheloc} alt='Betterheloc' className='w-full md:w-72 md:h-72 rounded-lg' />

                        <div className='flex flex-col gap-6'>

                            {/* title */}
                            <h4 className='text-2xl font-normal'>
                                Better HELOC
                            </h4>

                            <p className='text-sm hidden md:block'>Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.</p>

                            {/* next button */}
                            <button className='h-12 w-12 text-xl font-semibold hover:text-white border border-[#017848] hover:bg-[#017848] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300'>
                                <HiOutlineArrowRight />
                            </button>
                        </div>

                    </div>

                    {/* card 4 */}
                    <div className='w-full md:w-[32%] md:h-[22rem] p-6 md:px-10 md:py-8 bg-[#F0F7F1] rounded-lg flex flex-col gap-6'>

                        {/* title */}
                        <h4 className='text-2xl font-normal'>
                            Insurance
                        </h4>

                        {/* next button */}
                        <button className='h-12 w-12 text-xl font-semibold hover:text-white border border-[#017848] hover:bg-[#017848] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300'>
                            <HiOutlineArrowRight />
                        </button>

                        {/* card image */}
                        <Image src={Insurance} alt='Insurance image' className='rounded-lg' />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default QueriesSection