import React from "react";
import Image from "next/image";
import { GiRotaryPhone } from "react-icons/gi";
import { TbMap2 } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      {/* <div className="bg-black h-[20vh] flex py-2">
        <h1 className="text-white w-[100%]">Footer</h1>

        <div className="flex flex-col justify-center w-[12%]">
          <Image className="flex pb-2"
          src="/images/made-in-canada.png" width={137} height={75} />
          <div className="flex text-white text-xs lg:text-sm text-center font-fancy w-[100%]">MADE IN CANADA</div>
        </div>

      </div> */}

      <div className="flex flex-col items-center bg-black h-[15%] w-[100%]">
        <h4 className="text-white text-xl tracking-wider font-banner font-thin text-center py-4">
          We Ship Worldwide! Contact Us Today:
        </h4>
        <div>
          <ul className="text-white flex flex-col md:flex-row md:w-[100%] text-left w-[100%]">
            <li className="flex items-center z-40">
              <GiRotaryPhone size={30} />{" "}
              <p className="pl-2 md:pr-6 text-sm">(604) 420 3731 / 1 (877) 420 3731</p>
            </li>
            <li className="flex items-center">
              <IoIosMail size={30} />
              <p className="pl-2 md:pr-6 text-sm">info@metaldist.com</p>
            </li>
            <li className="flex items-center">
              <TbMap2 size={30} />
              <p className="pl-2 text-sm">
                7220 Winston Street, Burnaby, BC V5A 2G9
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center w-[25%] py-2.5">
          <Image
            className="flex pr-2"
            src="/images/made-in-canada.png"
            width={137}
            height={75}
          />
          <div className="flex text-white text-xs lg:text-sm text-left text-nowrap font-fancy w-[100%]">
            MADE IN CANADA
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
