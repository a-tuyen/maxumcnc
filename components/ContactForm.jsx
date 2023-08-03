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

        <div className= "flex justify-start w-full">
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
    </div>
  );
};

export default ContactForm;
