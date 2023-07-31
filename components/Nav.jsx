import Image from "next/image";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-center bg-black w-[100%]">
          <div className="flex justify-center items-center mt-0 pb-o mb-0 z-[100] w-[100%] h-[125px] bg-black">
          <Image
            src="https://user-images.githubusercontent.com/77664153/256351395-ce3f5c6c-b1f9-410b-ae34-f521e9db7c01.svg" //White
            // src="https://user-images.githubusercontent.com/77664153/256351314-b52984da-fee3-4c65-af3e-6c4ca4c6efeb.svg"
            width="200"
            height="50"
            className="mt-6 pt-6"
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
