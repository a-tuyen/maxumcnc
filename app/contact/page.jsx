import ContactForm from "@components/ContactForm";
import Image from "next/image";

const contact = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <h1 className="flex justify-center pt-16 bg-slate-400 w-full text-white">
          Contact Us
        </h1>
        <div className="bg-slate-400 grid grid-cols-4 w-full py-12">
          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-blue-500 rounded-full p-10">
              <Image
                src="https://user-images.githubusercontent.com/77664153/259216521-a242cf3a-72be-4c76-b70d-a39967a2947c.png"
                width={100}
                height={100}
                alt="map icon"
              />
            </div>
            <h1 className="my-8">Address</h1>
            <p className="text-lg">7220 Winston St.</p>
            <p className="text-lg">Burnaby, BC V5A 2G9</p>
          </div>

          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-blue-500 rounded-full p-10">
              <Image
                src="https://user-images.githubusercontent.com/77664153/259215682-e6ed4e45-a152-44cf-bfe8-948345475e16.png"
                width={90}
                height={100}
                alt="email icon"
              />
            </div>
            <h1 className="my-8">Email</h1>
            <p className="text-lg">info@metaldist.com</p>
          </div>

          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-blue-500 rounded-full p-10">
              <Image
                src="https://user-images.githubusercontent.com/77664153/259216034-54a5b4b3-7e62-4670-9806-76398237d6f6.png"
                width={100}
                height={100}
                alt="phone icon"
              />
            </div>
            <h1 className="my-8">Phone</h1>
            <p className="text-lg">604-420-3731</p>
            <p className="text-lg">1-877-420-3731 (toll-free)</p>
          </div>
          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-blue-500 rounded-full p-10">
              <Image
                src="https://user-images.githubusercontent.com/77664153/259250653-05dc691f-4a26-46bf-8bf2-db31f9a4ea90.png"
                width={100}
                height={100}
                alt="fax icon"
              />
            </div>
            <h1 className="my-8">Fax</h1>
            <p className="text-lg">604-420-9240</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default contact;
