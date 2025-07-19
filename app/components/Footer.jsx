import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {

    const resourceLinks = [
        "Home affordability calculator",
        "Mortgage calculator",
        "Free Mortgage calculator",
        " Mortgage calculator with taxes",
        "Mortgage calculator with PMI",
        "Rent vs buy calculator",
        "HELOC payment calculator",
        "HELOC vs cash-out refinance calculator",
        "Buy a home",
        "Sell a home",
        "Get home inspection"
    ];

    const companyLinks = [
        "About Us",
        "Careers",
        "Media",
        "Partner With Us",
        "Learning center",
        "FAQs",
        "Investor Relations"
    ]

    const contactUsLinks = [
        " hello@better.com",
        "415-523-8837",
        "FAQ",
        "Glossary",
        "Legal",
        "NMLS Consumer Access",
        "Privacy Policy",
        "Terms of Use",
        "Disclosures & Licensing",
        "Affiliated Business",
        "Browser Disclaimer"
    ]

    return (
        <footer className='py-10 px-4 md:px-16 mt-20 w-full border-t border-zinc-300 flex flex-col gap-12 md:gap-0 md:flex-row justify-between'>

            {/* logo section  */}
            <section className='w-full md:w-[36%] flex flex-col gap-6'>

                {/* logo */}
                <div>
                    <h4 className='text-4xl font-semibold text-[#006246]'>Better</h4>
                    <p className='mt-3'>Better is a family of companies serving all your homeownership needs.</p>
                </div>

                {/* logo */}
                <div>
                    <h4 className='text-2xl font-semibold text-[#006246]'>Better <span className='text-zinc-400 font-normal'>Mortage</span></h4>
                    <p className='mt-3'>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
                </div>

                {/* logo */}
                <div>
                    <h4 className='text-2xl font-semibold text-[#006246]'>Better <span className='text-zinc-400 font-normal'>Real Estate</span></h4>
                    <p className='mt-3'>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
                </div>

                {/* logo */}
                <div>
                    <h4 className='text-2xl font-semibold text-[#006246]'>Better <span className='text-zinc-400 font-normal'>Cover</span></h4>
                    <p className='mt-3'>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
                </div>

                {/* logo */}
                <div>
                    <h4 className='text-2xl font-semibold text-[#006246]'>Better <span className='text-zinc-400 font-normal'>Inspect</span></h4>
                    <p className='mt-3'>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
                </div>

                {/* logo */}
                <div>
                    <h4 className='text-2xl font-semibold text-[#006246]'>Better <span className='text-zinc-400 font-normal'>Settelment Service</span></h4>
                    <p className='mt-3'>Get transparent rates when you shop for title insurance all in one convenient place.</p>
                </div>

            </section>

            {/* Resources section */}
            <section className='w-full md:w-36 flex gap-5 flex-col justify-start'>

                <h4 className='text-lg font-semibold'>Resources</h4>

                {/* Render links */}
                {resourceLinks.map((name, index) => (
                    <button key={index} className="text-start cursor-pointer hover:underline transition-all duration-300">
                        {name}
                    </button>
                ))}

            </section>

            {/* Company section */}
            <section className='w-full md:w-36 flex gap-5 flex-col justify-start'>

                <h4 className='text-lg font-semibold'>Company</h4>

                {/* Render links */}
                {companyLinks.map((name, index) => (
                    <button key={index} className="text-start cursor-pointer hover:underline transition-all duration-300">
                        {name}
                    </button>
                ))}

            </section>

            {/* Contact Us section */}
            <section className='w-full md:w-36 flex gap-5 flex-col justify-start'>

                <h4 className='text-lg font-semibold'>Contact Us</h4>

                {/* Render links */}
                {contactUsLinks.map((name, index) => (
                    <button key={index} className="text-start cursor-pointer hover:underline transition-all duration-300">
                        {name}
                    </button>
                ))}

                <div className='flex gap-4 text-2xl'>
                    <SlSocialFacebook className='cursor-pointer hover:text-blue-500' />
                    <SlSocialInstagram className='cursor-pointer hover:text-red-400'/>
                    <SlSocialLinkedin className='cursor-pointer hover:text-sky-500'/>
                </div>

            </section>

        </footer>

    )
}

export default Footer