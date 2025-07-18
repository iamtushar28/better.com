"use client"
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../reduxStore/sidebarSlice";
import { FaPlus } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
    return (
        <section
            className={`h-screen w-full p-8 bg-white fixed top-0 bottom-0 border-0 z-50 overflow-y-auto transform transition-transform duration-300 
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >


            <div className='flex justify-between items-center'>
                {/* logo */}
                <h2 className='text-3xl font-semibold'>Better</h2>

                {/* hide sidebar button */}
                <button
                    onClick={() => dispatch(closeSidebar())}
                    className='text-3xl h-12 w-12 active:bg-zinc-100 flex justify-center items-center active:ring-2 active:ring-[#027d5a] rounded'
                >
                    <FaPlus className='rotate-45' />
                </button>

            </div>

            {/* nav links */}
            <div className='mt-8 flex flex-col gap-6'>

                <button className='w-full py-2 text-xl flex justify-between items-center'>
                    Buy
                    <FaSortDown />
                </button>
                <button className='w-full py-2 text-xl flex justify-between items-center'>
                    Refinance
                    <FaSortDown />
                </button>
                <button className='w-full py-2 text-xl flex justify-between items-center'>
                    HELOC
                    <FaSortDown />
                </button>
                <button className='w-full py-2 text-xl flex justify-between items-center'>
                    Rates
                    <FaSortDown />
                </button>
                <button className='w-full py-2 text-xl flex justify-between items-center'>
                    Better+
                    <FaSortDown />
                </button>

                {/* call us button */}
                <button className='h-14 px-2 rounded-4xl bg-green-50 flex gap-4 justify-center items-center'>
                    <IoMdCall className='text-xl' />
                    Call us<span className='underline'>+917463524388</span>
                </button>

                {/* continue button */}
                <button className='mt-12 py-[12px] font-semibold text-[#292b29] bg-[#1EE07F] hover:text-white hover:bg-transparent rounded-3xl transition-all duration-300 cursor-pointer'>
                    Continue
                </button>
                {/* login button */}
                <button className='py-[12px] border border-green-100 rounded-3xl flex gap-2 justify-center items-center'>
                    Sign In
                    <FaUser />
                </button>

            </div>

        </section>
    )
}

export default Sidebar