"use client"
import React from 'react'
import { useDispatch } from "react-redux";
import { openSidebar } from "../reduxStore/sidebarSlice";
import NavLink from './shared/NavLink';
import { FiMenu } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <nav className='w-full h-[74px] md:h-[88px] px-4 md:px-[40px] text-white bg-[#004733] flex justify-between items-center fixed top-0 left-0 right-0 z-50'>

            <div className='flex gap-6 items-center'>

                {/* logo */}
                <h2 className='text-xl font-semibold'>Better</h2>

                {/* nav links */}
                <div className='hidden xl:flex gap-10 items-center'>

                    <NavLink
                        title="Buy"
                        panelLinks={[
                            { label: "Apply Now" },
                            { label: "Purchase rates" },
                            { label: "Affordability calculator" },
                            { label: "Mortgage calculator" },
                            { label: "Rent vs buy calculator" },
                            { label: "Find an agent" },
                            { label: "VA loans" },
                            { label: "Learning center" }
                        ]}
                    />

                    <NavLink
                        title="Refinance"
                        panelLinks={[
                            { label: "Apply Now" },
                            { label: "Refinance rates" },
                            { label: "Cash-out refinance calculator" },
                            { label: "Learning center" }
                        ]}
                    />

                    <NavLink
                        title="HELOC"
                        panelLinks={[
                            { label: "Apply Now" },
                            { label: "Calculate your Cash 💵" },
                            { label: "HELOC vs. Cash-out Refinance" },
                            { label: "Learning center" }
                        ]}
                    />
                    <NavLink
                        title="Rates"
                        panelLinks={[
                            { label: "Purchase mortgage rates" },
                            { label: "Refinance rates" },
                            { label: "Refinance cash-out rates" },
                            { label: "HELOC rates" },
                            { label: "Purchase VA rates" },
                        ]}
                    />
                    <NavLink
                        title="Better+"
                        panelLinks={[
                            { label: "Get Insurance" },
                            { label: "Title and Closing" },
                            { label: "Better Attorney Match" },
                            { label: "Learning center" },
                            { label: "Better Agent Match" },
                            { label: "Better Duo" },
                        ]}
                    />

                </div>

            </div>

            <div className='flex gap-5'>

                {/* call button */}
                <button className='h-8 w-8 md:h-11 md:w-11 text-white text-lg hover:text-[#292b29] hover:bg-white rounded-full border border-white transition-all duration-300 cursor-pointer flex justify-center items-center'>
                    <IoMdCall />
                </button>

                {/* sign in button */}
                <button className='hidden md:block px-[24px] py-[12px] text-white hover:text-[#292b29] hover:bg-white rounded-3xl transition-all duration-300 cursor-pointer'>
                    Sign In
                </button>

                {/* continue button */}
                <button className='px-[18px] py-[2px] font-semibold md:px-[24px] md:py-[12px] text-[#292b29] bg-[#1EE07F] hover:text-white hover:bg-transparent rounded-3xl transition-all duration-300 cursor-pointer'>
                    Continue
                </button>

                <button
                    className='text-2xl cursor-pointer block md:hidden'
                    onClick={() => dispatch(openSidebar())}
                >
                    <FiMenu />
                </button>

            </div>

        </nav>
    )
}

export default Navbar