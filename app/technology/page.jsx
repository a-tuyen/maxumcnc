import React from "react";
import Hero2 from "@components/Hero2";

const Technology = () => {
  return (
    <div>
      <Hero2
        heading={"OUR EQUIPMENT"}
        message={
          "We have top of the line CNC machines and a fully equippped machine shop to get you from start to finish"
        }
        img={"/images/maxum-tech-tall.png"}
      />

      <div className="flex flex-col items-center mt-[150px]">
        <h1 className="text-md mb-8 text-center">CNC Milling Machines</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              DOOSAN<span className="font-extralight pl-2">DNM 4500</span>
            </h2>
            <div className="tracking-wide italic text-center md:text-left w-[70%] pb-2 md:pb-0">
              Reliable, high precision, stable Vertical Milling Center with a
              direct-coupled spindle for higher productivity
            </div>
          </div>

          <ul className="list-none text-center md:text-left">
            <li>X - AXIS TRAVEL - 31.5&quot;</li>
            <li>Y - AXIS TRAVEL - 15.75&quot;</li>
            <li>Z - AXIS TRAVEL - 18.9&quot;</li>
            <li>MAX LOAD - 1323 lbs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-b-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              HAAS<span className="font-extralight pl-2">VF2</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              Best selling vertical machine in the World. Equipped with Pallet
              Changer for continuous production
            </div>
          </div>

          <ul className="list-none text-center md:text-left">
            <li>X - AXIS TRAVEL - 30&quot;</li>
            <li>Y - AXIS TRAVEL - 16&quot;</li>
            <li>Z - AXIS TRAVEL - 20&quot;</li>
            <li>MAX LOAD - 3000 lbs</li>
          </ul>
        </div>

        <h1 className="text-md mt-8 mb-8 text-center">CNC LATHES</h1>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              YAMA SEIKI<span className="font-extralight pl-2">GS-280LMY</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              Powerful turning center with built-in spindle type tailstock to
              provide maximum rigidity and load capacity
            </div>
          </div>

          <ul className="list-none text-center md:text-left">
            <li>MAX TURNING DIAMETER - 16.53&quot;</li>
            <li>MAX LENGTH - 47.24&quot;</li>
            <li>CHUCK CAPACITY - 10&quot;</li>
            <li>MAX LOAD - 506 lbs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-b-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              YAMA SEIKI<span className="font-extralight pl-2">GA-2600</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
              Uses 2 different bed lengths and 5 different sizes of bar
              capacities combined with a powerful spindle, high speed servo
              indexing turret and high rigidity structure design
            </div>
          </div>

          <ul className="list-none text-center md:text-left">
            <li>MAX TURNING DIAMETER - 13.77&quot;</li>
            <li>MAX LENGTH - 23.85&quot;</li>
            <li>CHUCK CAPACITY - 10&quot;</li>
            <li>MAX LOAD - 506 lbs</li>
          </ul>
        </div>

        <h1 className="py-8 text-center">SOFTWARE</h1>
        {/* <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
          Autodesk<span className="font-extralight pl-2">Fusion 360</span>
        </h2> */}

<div className="flex flex-col items-center md:flex-row md:justify-start py-8 md:px-[5%] mb-4 border-y-[1.5px] border-black w-[90%] lg:w-[68%]">
          <div className="w-[70%] flex flex-col items-center md:items-start">
            <h2 className="flex flex-col md:flex-row md:items-center pb-3 text-center">
              Autodesk<span className="font-extralight pl-2">Fusion 360</span>
            </h2>
            <div className="tracking-wide italic text-center w-[70%] pb-2 md:pb-0 md:text-left">
            </div>
          </div>

          <ul className="list-none text-center md:text-left">
            <li>SUPPORTEED FILES: STEP and 3MF</li>
            {/* <li>MAX LENGTH - 23.85&quot;</li>
            <li>CHUCK CAPACITY - 10&quot;</li>
            <li>MAX LOAD - 506 lbs</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
