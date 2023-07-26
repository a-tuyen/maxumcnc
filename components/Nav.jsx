import Image from "next/image";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-start h-0">
          <div className="relative pb-o mb-0">
          <Image
            src="https://user-images.githubusercontent.com/77664153/256351395-ce3f5c6c-b1f9-410b-ae34-f521e9db7c01.svg"
            width="200"
            height="50"
            className="mt-0 pt-0"
          />
          {/* <h1>Precision CNC at it's finest</h1> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
