import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-black h-[15%] lg:h-[100px] w-[100%] z-0">
        <div className="lg:w-[75%]">
        <h4 className="text-white text-xl lg:text-2xl tracking-wider font-banner font-thin text-center lg:text-left py-4 lg:pt-1 lg:pb-2 lg:px-4">
        <Link href="/contact">We Ship Worldwide! Contact Us Today:</Link>
        </h4>
          <ul className="text-white flex flex-col md:flex-row  pl-[12%] lg:pl-4 md:pl-0 text-left w-[100%] md:w-[100%]">
            <li className="flex items-center">
              <GiRotaryPhone size={30} />{" "}
              <p className="pl-2 md:pr-6 lg:pr-12 text-sm">
                (604) 420 3731 / 1 (877) 420 3731
              </p>
            </li>
            <li className="flex items-center">
              <IoIosMail size={30} />
              <p className="pl-2 md:pr-6 lg:pr-12 text-sm">info@metaldist.com</p>
            </li>
            <li className="flex items-center">
              <TbMap2 size={30} />
              <p className="pl-2 text-sm">
                7220 Winston Street, Burnaby, BC V5A 2G9
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center lg:justify-end w-[25%] lg:w-[20%] py-2.5 lg:pr-4">
          <Image
            className="flex pr-2"
            src="/images/made-in-canada.png"
            width={137}
            height={75}
          />
          <div className="flex text-white text-xs lg:text-base text-left font-fancy w-[100%] lg:pl-2">
            MADE IN CANADA
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
