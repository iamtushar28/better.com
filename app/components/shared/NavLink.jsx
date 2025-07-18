"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const NavLink = ({ title, panelLinks = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Link Button */}
      <Link
        href="/"
        className="px-4 py-2 text-white hover:text-[#292b29] hover:bg-white rounded-3xl transition-all duration-300"
      >
        {title}
      </Link>

      {/* Hover Panel */}
      {panelLinks.length > 0 && (
        <div
          className={`absolute left-0 mt-[5px] py-8 transition-all duration-200 z-40 ${isHovered ? "block" : "hidden"
            }`}
        >
          <div className="bg-white w-[22rem] px-2 py-3 -mt-4 rounded-lg shadow-lg">

            {panelLinks.map((item, idx) => (
              <button
                key={idx}
                className="w-full h-12 px-4 text-black hover:bg-zinc-100 flex justify-between items-center rounded-lg transition-all duration-200 cursor-pointer"
                onClick={item.onClick}
              >
                {item.label}

                {(item.label === "Better Agent Match" || item.label === "Better Duo") && (
                  <div className="text-sm bg-yellow-400 px-3 py-1 rounded-3xl">For Agents</div>
                )}

                <HiOutlineArrowRight className="text-xl" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
