import Image from "next/image";

const ContactForm = () => {
  return (
    // <div className="flex flex-col items-center bg-red-500">
    <>


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
   </>
  );
};

export default ContactForm;
