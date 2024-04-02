

import React from 'react'
import Hero2 from "@components/Hero2";


const Technology = () => {
  return (
    <div>
            <Hero2
      heading={"OUR TECHNOLOGIES"}
      message={"We have top of the line CNC machines to get you from start to finish"}
      img={"/images/maxum-tech-tall.png"} />
    <div className='flex flex-col items-center mt-[300px]'>
        {/* <h1>Our Technologies</h1> */}
        <h1 className='text-md'>CNC Milling Machines</h1>
        <h2>DOOSAN<span className='font-extralight '>  DNM 4500</span></h2>
        <div className='tracking-wide'>X - AXIS TRAVEL - 31.5&quot; </div>
        <div className='tracking-wide'>Y - AXIS TRAVEL - 15.75&quot; </div>
        <div className='tracking-wide'>Z - AXIS TRAVEL - 18.9&quot;"</div>
        <div className='tracking-wide'>MAX WORKPIECE WEIGHT - 1323 lbs</div>
        <div className='tracking-wide'>Reliable, high precision, stable Vertical Milling Center with a direct-coupled spindle for higher productivity</div>

        <h2>HAAS <span className='font-extralight'>  VF2</span></h2>
        <div>X - AXIS TRAVEL - 30&quot; </div>
        <div>Y - AXIS TRAVEL - 16&quot; </div>
        <div>Z - AXIS TRAVEL - 20&quot; </div>
        <div>Best selling vertical machine in the World</div>
        

        <h1 className='text-md mt-8'>CNC LATHES</h1>

        <h2>YAMA SEIKI<span className='font-extralight'>  GS-280LMY</span></h2>
        <div>x-axis - 30&quot; </div>
        <div>y-axis - 16&quot; </div>
        <div>z-axis - 20&quot; </div>
        <div>Best selling vertical machine in the World</div>

        <h2>YAMA SEIKI<span className='font-extralight'>   GA-2600</span></h2>
        <div>2-Axis CNC Lathe</div>
        <div>Max Turning Diameter 13.77&quot; </div>
        <div>Max Length 23.85&quot; </div>
        


        <h1 className='py-8'>SOFTWARE</h1>
        <div>Autodesk Fusion 360</div>
    </div>
    </div>

  )
}

export default Technology