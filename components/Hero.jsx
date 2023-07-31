import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="">
      <Image
        src="https://user-images.githubusercontent.com/77664153/257346453-d67a11e6-d931-4916-b70c-b16992b05322.png"
        width={0}
        height={0}
        fill={true}
        sizes="100vw"
        // style={{ width: "100vw", height: "auto", objectFit: "cover"}}
        style={{ objectFit: "cover" }}
        className="z[0]"
      />
      <div className="flex justify-center md:justify-end text-white text-center md:text-right md:pr-[17%] z-[100]">
        <h1 className="absolute text-white font-boldHeading text-6xl tracking-wider top-[37%] z-[10]">
          Precision CNC services
        </h1>
        <p className="absolute py-2 top-[55%] md:top-[50%] font-heading text-center text-2xl md:text-3xl text-white font-light z-[10]">
          Locally based in Burnaby, BC
        </p>
        <button className="absolute text-white font-boldHeading text-4xl tracking-wider top-[65%] z-[10] px-4 py-3 border-2 rounded-lg">
          <Link href={"/"}>Contact US</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
