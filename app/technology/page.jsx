import React from "react";
import Hero2 from "@components/Hero2";

const Technology = () => {
  return (
    <div>
      <Hero2
        heading={"OUR TECHNOLOGIES"}
        message={
          "We have top of the line CNC machines to get you from start to finish"
        }
        img={"/images/maxum-tech-tall.png"}
      />
      <div className="flex flex-col items-center mt-[300px]">
        {/* <h1>Our Technologies</h1> */}
        <h1 className="text-md">CNC Milling Machines</h1>

        <div className="flex justify-between items-center border-y-1 border-black w-[50%]">
          <div className="w-[50%]">
            <h2 className="pb-0">
              DOOSAN<span className="font-extralight"> DNM 4500</span>
            </h2>
            <div className="tracking-wide italic">
              Reliable, high precision, stable Vertical Milling Center with a
              direct-coupled spindle for higher productivity
            </div>
          </div>

          <ul className="list-none">
            <li>X - AXIS TRAVEL - 31.5&quot;</li>
            <li>Y - AXIS TRAVEL - 15.75&quot;</li>
            <li>Z - AXIS TRAVEL - 18.9&quot;"</li>
            <li>MAX WORKPIECE WEIGHT - 1323 lbs</li>
          </ul>

          {/* <div className='tracking-wide'>X - AXIS TRAVEL - 31.5&quot; </div>
        <div className='tracking-wide'>Y - AXIS TRAVEL - 15.75&quot; </div>
        <div className='tracking-wide'>Z - AXIS TRAVEL - 18.9&quot;"</div>
        <div className='tracking-wide'>MAX WORKPIECE WEIGHT - 1323 lbs</div> */}
        </div>

        <h2>
          HAAS <span className="font-extralight"> VF2</span>
        </h2>
        <div>X - AXIS TRAVEL - 30&quot; </div>
        <div>Y - AXIS TRAVEL - 16&quot; </div>
        <div>Z - AXIS TRAVEL - 20&quot; </div>
        <div>Best selling vertical machine in the World</div>
        <div>Equipped with Pallet Changer for continuous production</div>

        <h1 className="text-md mt-8">CNC LATHES</h1>

        <h2>
          YAMA SEIKI<span className="font-extralight"> GS-280LMY</span>
        </h2>
        <ul className="list-disc pb-5">
          <li>MAX TURNING DIAMETER - 16.53&quot;</li>
          <li>MAX LENGTH - 47.24&quot;</li>
          <li>CHUCK CAPACITY - 10&quot;</li>
          <li>MAX LOAD - 506 lbs</li>
        </ul>
        {/* <div>Max Turning Diameter 16.53&quot; </div>
        <div>Max LeMax Load - 506 lbsngth 47.24&quot; </div>
        <div>Chuck Capacity - 10&quot;</div>
        <div>Max Load - 506 lbs</div> */}

        <div>
          Powerful turning center with built-in spindle type tailstockv to
          provide maximum rigidity and load capacity
        </div>

        <h2>
          YAMA SEIKI<span className="font-extralight"> GA-2600</span>
        </h2>
        <div>2-Axis CNC Lathe</div>
        <div>Max Turning Diameter 13.77&quot; </div>
        <div>Max Length 23.85&quot; </div>
        <div>Chuck Capacity - 10&quot;</div>
        <div>Max Load - 506 lbs</div>
        <div>
          Uses 2 different bed lengths and 5 different sizes of bar capacities
          combined with a powerful spindle, high speed servo indexing turret and
          high rigidity structure design
        </div>

        <h1 className="py-8">SOFTWARE</h1>
        <div>Autodesk Fusion 360</div>
      </div>
    </div>
  );
};

export default Technology;
