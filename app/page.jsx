// import "@styles/globals.css";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Image
        src="https://user-images.githubusercontent.com/77664153/256369214-0cb55a1b-4308-4679-b523-dadde14eaa09.png"
        width={0}
        height={0}
        sizes="50vw"
        style={{ width: "100vw", height: "auto"}}
        className="z[0]"
      />

     {/* <div className="absolute top-0 left-0 right-0 bottom-0 h-[auto] bg-black/30 z-[1]" /> */}
      <div className="flex flex-col items-center text-white z-[1]">
        <h1 className="absolute text-white font-boldHeading text-6xl tracking-wider top-[40%] text-center z-[10] px-4">
         Precision CNC services
        </h1>
        <p className="absolute justify-center w-[80%] md:w-[70%] py-2 md:py-10 top-[60%] sm:top-[55%] font-heading text-2xl md:text-3xl text-white text-center font-thin z-[10]">
          Website Currently Under Construction
        </p>
      </div>
    </>
  );
};

export default Home;
