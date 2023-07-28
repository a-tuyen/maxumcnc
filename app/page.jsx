// import "@styles/globals.css";
import ContactForm from "@components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Image
        src="https://user-images.githubusercontent.com/77664153/256866128-baa216aa-0a2c-43c3-9c88-f45806777531.png"
        width={0}
        height={0}
        fill={true}
        sizes="100vw"
        // style={{ width: "100vw", height: "auto", objectFit: "cover"}}
        style={{objectFit: "cover"}}
        className="z[0]"
      />
      <div className="flex flex-col items-center text-white z-[1]">
        <h1 className="absolute text-white font-boldHeading text-6xl tracking-wider top-[40%] text-center z-[10] px-4">
          Precision CNC services
        </h1>
        <p className="absolute w-[80%] md:w-[70%] py-2 md:py-6 top-[50%] sm:top-[50%] font-heading text-2xl md:text-3xl text-white text-center font-light z-[10]">
          Locally based in Burnaby, BC
        </p>
        <button className="absolute text-white font-boldHeading text-6xl tracking-wider top-[70%] text-center z-[10] px-4 py-3 border-2 rounded-lg">
          <Link href={"/"}>Contact US</Link>
        </button>
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
