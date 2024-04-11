import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import Image from "next/image";

const contact = () => {
  return (
    <div className="flex flex-col items-center">
       <Hero
      heading={"CONTACT US"}
      message={"We are always ready and willing to help you out with your next project"}
      img={"/images/maxum-process-tall.png"} />

      <div className="w-full">

        <ContactForm />

        <div className="bg-accent1 grid grid-cols-1 md:grid-cols-4 w-full py-10 mb-24">
          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
              <Image
                src="/images/maxum-map.png"
                width={100}
                height={100}
                alt="map icon"
              />
            </div>
            <h1 className="my-8">Address</h1>
            <p className="text-xl tracking-wide">7220 Winston St.</p>
            <p className="text-xl tracking-wide">Burnaby, BC V5A 2G9</p>
          </div>

          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
              <Image
               src="/images/maxum-mail.png"
                width={90}
                height={100}
                alt="email icon"
              />
            </div>
            <h1 className="my-8">Email</h1>
            <p className="text-xl tracking-wide">info@metaldist.com</p>
          </div>

          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
              <Image
                src="/images/maxum-phone.png"
                width={100}
                height={100}
                alt="phone icon"
              />
            </div>
            <h1 className="my-8">Phone</h1>
            <p className="text-xl tracking-wide">604-420-3731</p>
            <p className="text-xl tracking-wide">1-877-420-3731 (toll-free)</p>
          </div>
          <div className="flex flex-col items-center text-white text-center">
            <div className="bg-accent2 rounded-full p-10 mt-20 md:mt-0">
              <Image
                src="/images/maxum-fax.png"
                width={100}
                height={100}
                alt="fax icon"
              />
            </div>
            <h1 className="my-8">Fax</h1>
            <p className="text-xl tracking-wide">604-420-9240</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default contact;
