"use client";

import ContactForm from "@components/ContactForm";
import Hero2 from "@components/Hero2";

const Home = () => {
  return (
    <>
      <Hero2
        heading={"PRECISION CNC MACHINING"}
        message={"Specializing in Lead (Pb), Zinc (Zn) and Aluminum (Al)"}
        img={"/images/maxum-home.png"}
      />
      <div className="h-[30vh]">
      </div>

    </>
  );
};

export default Home;
