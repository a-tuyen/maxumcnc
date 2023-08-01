import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center text-right mt-[35%] md:mt-[20%] lg:mt-[10%]">
      <Image
        src="https://user-images.githubusercontent.com/77664153/257346453-d67a11e6-d931-4916-b70c-b16992b05322.png"
        width={0}
        height={0}
        fill={true}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="z[0]"
      />
      <div className="flex flex-col items-center justify-center text-white text-center z-[100]">
        <h1 className="text-white font-boldHeading text-6xl tracking-wider top-[37%] z-[10]">
          Precision CNC services
        </h1>
        <p className="py-6 font-heading text-center text-2xl md:text-3xl text-white font-light z-[10]">
          Locally based in Burnaby, BC
        </p>
        <button className="text-white font-boldHeading text-4xl tracking-wider z-[10] px-4 py-2 border-2 rounded-lg">
          <Link href={"/contact"}>Contact US</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
