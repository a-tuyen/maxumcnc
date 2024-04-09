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

      <div className="flex justify-between bg-[#000000]">
        <div className="h-[17rem] w-[100%] md:w-[60%] lg:w-[35%] pl-[2%] ml-[0] md:ml-[4%] flex justify-center">
          <ul className="text-white text-xl">
            <h4 className="text-4xl pt-6 pb-3 font-heading tracking-wide z-40">
              WE ARE HERE TO HELP
            </h4>
            <li className="flex items-center p-2 z-40">
              <GiRotaryPhone size={30} />{" "}
              <p className="pl-2">1 (877) 420 3731</p>
            </li>
            <li className="flex items-center p-2">
              <IoIosMail size={30} />
              <p className="pl-2 ">info@metaldist.com</p>
            </li>
            <li className="flex items-center p-2">
              <TbMap2 size={30} />
              <p className="pl-2">7220 Winston Street, Burnaby, BC V5A 2G9</p>
            </li>
            <li>
              <p className="pt-2">Copyright © 2022 Metal Distributors LTD</p>
            </li>
          </ul>
        </div>
       
        <div className="flex flex-col justify-center w-[12%]">
          <Image className="flex pb-2"
          src="/images/made-in-canada.png" width={137} height={75} />
          <div className="flex text-white text-xs lg:text-sm text-center font-fancy w-[100%]">MADE IN CANADA</div>
        </div>

      </div>
    </>
  );
};

export default Footer;
