import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center bg-red-500">
      <h1 className="flex justify-center pt-16 bg-slate-400 w-full text-white">
        Contact Us
      </h1>

      <div className="bg-slate-400 grid grid-cols-3 w-full py-12">
        <div className="flex flex-col items-center text-white text-center">
          <div className="bg-blue-500 rounded-full p-10">
            <Image
              // src="https://user-images.githubusercontent.com/77664153/189387060-cabc9d81-b64d-466d-bf56-d5233f03e7fa.png"
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
              // src="https://user-images.githubusercontent.com/77664153/259213393-694cc4b3-b608-4b68-be4e-a50c0daf4a87.png"
              // src="https://user-images.githubusercontent.com/77664153/189203263-d8200e4d-2aa4-4b03-b138-bc12c7e758f9.png"
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
              // src="https://user-images.githubusercontent.com/77664153/189227458-6398c5cc-22ab-47ea-8149-cba5ba7d6f23.png"
              width={100}
              height={100}
              alt="phone icon"
            />
          </div>
          <h1 className="my-8">Phone</h1>
          <p className="text-lg">604-420-3731</p>
          <p className="text-lg">1-877-420-3731 (toll-free)</p>
        </div>
      </div>

      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-col justify-center items-center text-black my-10 w-full">
          <div className="grid gap-6 mb-6">
            <div className="flex justify-center">
              <h2>Send Us A Message</h2>
            </div>
            <p className="pb-4">
              Please fill out the form below and we will be in touch
            </p>
            <form
              name="Maxum-Contact"
              action="/success"
              method="post"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="Maxum-Contact" />
              <div className="border-black">
                <label htmlFor="name">Name *</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label htmlFor="project-details">Message *</label>
                <textarea name="project-details" required />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-[#FF924E] hover:bg-[#4081A9] w-[40%]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-10">
          <h2>Hours Of Operation</h2>
          <ul>
            <li>Monday - Thursday: 8am - 4pm</li>
            <li>Friday: 8am - 3pm </li>
            <li>Saturday - Sunday: Closed</li>
            <li>Stat Holidays: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
