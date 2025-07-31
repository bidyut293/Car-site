"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <header
          className={`bg-white py-[13px] px-6 fixed top-0 left-0 right-0 transition-transform duration-300 z-50 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-16 flex justify-between items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={150}
              height={300}
            />

            <div className="flex justify-center items-center gap-[40px]">
              <button
                // type="submit"
                className="bg-[#5CD6FF] cursor-pointer text-[16px] text-black border-[1px] border-[#00BFFF] border-solid font-[500] py-[14px] px-[30px] rounded-full"
              >
                Contact Us
              </button>
              <Image
              src="/icons/linkedIn.png"
              alt="Logo2"
              style={{height:'100%',cursor:'pointer'}}
              width={24}
              height={24}
            />
            <Image
              src="/images/language.svg"
              alt="Logo3"
              style={{marginLeft:'12px', cursor:'pointer'}}
              width={52}
              height={22}
            />
            </div>
          </div>
        </header>
        <div className="pt-[72px] flex-grow relative overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/videos/automotive.mp4"
              type="video/mp4"
            />
            <source
              src="/videos/automotive.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 font-sans bg-black/60 flex items-center justify-center">
            <div className="text-center text-white mb-4 px-2 ">
              <h2 className="font-[400] text-[20px] mb-7">
                Performance in motion
              </h2>
              <h1 className="text-[30px] md:text-4xl font-semibold mb-2">
                Soft Trims and{" "}
                <span className="">NVH solutions</span>
              </h1>
              <p className="text-4xl md:text-4xl font-[300]">
                for seamless rides
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
