"use client";

import ContactForm from "@components/ContactForm";
import Hero2 from "@components/Hero2";

const Home2 = () => {
  return (
    <>
      <Hero2
        heading={"PRECISION CNC MACHINING"}
        message={"Located in Burnaby, BC"}
        img={"/images/maxum-home.png"}
      />

      <video
        src={require("../../public/videos/maxum-video-bg.mp4")}
        autoPlay
        muted
        loop
        className="absolute z[0] top-0 left-0 object-fill h-full w-full"
      />
      <div className="flex flex-col w-full h-[1000px]">
        <h1 className="mt-[200px]">Our Capabilities</h1>
        <div>
          With 75 years in the Metal Fabrication industry, Maxum CNC is a
          trusted manufacturer for intricate, detailed and complex metal
          components
        </div>
      </div>
    </>
  );
};

export default Home2;
