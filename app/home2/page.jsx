"use client";

import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import Link from "next/link";

const Home2 = () => {
  return (
    <>
      <Hero
        heading={"PRECISION CNC MACHINING"}
        message={
          "Specializing in Lead (Pb), Zinc (Zn), Aluminum (Al) amd Steel"
        }
        img={""}
      />

      <video
        src={require("../../public/videos/maxum-video-bg.mp4")}
        autoPlay
        muted
        loop
        className="absolute z[0] top-0 left-0 object-fill h-screen w-screen mb-0"
      />

      {/* <button className="relative text-white font-boldHeading text-4xl tracking-wider px-4 py-2 border-2 rounded-lg hover:bg-white hover:text-gray-500">
        <Link href={"/contact"}>Contact US</Link>
      </button> */}

      <div className="flex flex-col md:flex-row justify-center items-center bg-accent1 px-1 md:py-4">
        <h1 className="font-banner text-4xl font-light mt-8 md:mt-0 text-center text-white">
          Celebrating
        </h1>
        <h1 className="font-heading text-4xl bold font-medium text-accent2 my-4 md:my-0 md:px-3">
          75 years
        </h1>
        <h1 className="font-banner text-4xl font-light mb-8 md:mb-0 text-center text-white">
          in the Metal Fabrication Industry
        </h1>
      </div>
      <div>
        <div>
          Maxum CNC is a brand of Metal Distributors Ltd and is a trusted
          manufacturer for intricate, detailed and complex metal components.
        </div>
        <h2>What Makes Us Different?</h2>
      </div>
    </>
  );
};

export default Home2;
