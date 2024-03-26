

import React from 'react'
import Hero2 from "@components/Hero2";


const Technology = () => {
  return (
    <div>
            <Hero2
      heading={"OUR TECHNOLOGIES"}
      message={"We have top of the line CNC machines to get you from start to finish"}
      img={"/images/maxum-tech.png"} />
    <div className='flex flex-col items-center mt-[300px]'>
        {/* <h1>Our Technologies</h1> */}
        <h2>CNC Milling Machines</h2>
        <h2>DOOSAN<span className='font-extralight '>  DNM 4500</span></h2>
        <div>x-axis - 31.5&quot; </div>
        <div>y-axis - 15.75&quot; </div>
        <div>z-axis - 18.&quot;"</div>
        <div>Reliable, high precision, stable Vertical Milling Center</div>

        <h2>HAAS <span className='font-extralight'>  VF2</span></h2>
        <div>x-axis - 30&quot; </div>
        <div>y-axis - 16&quot; </div>
        <div>z-axis - 20&quot; </div>
        <div>Best selling vertical machine in the World</div>

        <h2>CNC LATHES</h2>

        <h2>YAMA SEIKI<span className='font-extralight'>  GS-280LMY</span></h2>
        <div>x-axis - 30&quot; </div>
        <div>y-axis - 16&quot; </div>
        <div>z-axis - 20&quot; </div>
        <div>Best selling vertical machine in the World</div>

        <h2>YAMA SEIKI<span className='font-extralight'>   GA-2600</span></h2>
        <div>Max Turning Diameter 13.77&quot; </div>
        <div>Max Length 23.85&quot; </div>
        <div>2-Axis CNC Lathe</div>


        <h2>SOFTWARE</h2>
        <div>Autodesk Fusion 360</div>
    </div>
    </div>

  )
}

export default Technology