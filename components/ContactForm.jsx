import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-8">Contact Us</h1>

      <div className="flex bg-yellow-200 w-full justify-evenly">
        <div className="flex flex-col justify-center items-center text-black my-10 w-full">
          <div className="grid gap-6 mb-6">
            <div className="flex justify-center">
              <h1 className="font-heading text-3xl py-8">Send Us A Message</h1>
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

        <div className="flex justify-start w-full">
          <ul>
            <li>Phone: 604-420-3731</li>
            <li>Email: info@metaldist.com</li>
            <li>Fax:604-420-3731</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="bg-black flex justify-evenly w-full">
        <div className="bg-blue-500 rounded-full p-10">
        <Image
          src="https://user-images.githubusercontent.com/77664153/189387060-cabc9d81-b64d-466d-bf56-d5233f03e7fa.png"
          width={100}
          height={100}
          alt="map icon"
        />
        </div>
        <div className="bg-blue-500 rounded-full p-10">
        <Image
          src="https://user-images.githubusercontent.com/77664153/189203263-d8200e4d-2aa4-4b03-b138-bc12c7e758f9.png"
          width={100}
          height={100}
          alt="map icon"
        />
        </div>
        <div className="bg-blue-500 rounded-full p-10">
        <Image
          src="https://user-images.githubusercontent.com/77664153/189227458-6398c5cc-22ab-47ea-8149-cba5ba7d6f23.png"
          width={100}
          height={100}
          alt="map icon"
        />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
