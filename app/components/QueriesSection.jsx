import React from 'react'

const QueriesSection = () => {
    return (
        <section className='p-10'>

            {/* title */}
            <h2 className='text-5xl font-normal'>
                Got questions? <br />
                We've got answers
            </h2>

            {/* change queries section buttons */}
            <div>

                <button className="px-[24px] py-[8px] font-semibold rounded-4xl transition-all duration-300 cursor-pointer text-[#017848] border border-[#017848] ring-5 ring-[#017848]">
                    Our products
                </button>
                <button className="px-[24px] py-[8px] font-semibold rounded-4xl transition-all duration-300 cursor-pointer text-[#017848] border border-[#017848] ring-5 ring-[#017848]">
                    Our products
                </button>
                <button className="px-[24px] py-[8px] font-semibold rounded-4xl transition-all duration-300 cursor-pointer text-[#017848] border border-[#017848] ring-5 ring-[#017848]">
                    Our products
                </button>

            </div>

        </section>
    )
}

export default QueriesSection