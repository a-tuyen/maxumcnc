
const ContactForm = () => {
    return (
        <div className="flex text-black z-[40]">
          <div className='flex flex-col justify-center'>
            <h1 className="font-heading text-3xl">Contact Us</h1>
            <p>Please fill out the form with your project details and we will be in touch</p>
            <form name="Maxum-Contact" method="post" action="/" data-netlify="true">
              <input type="hidden" name="form-name" value="Maxum-Contact" />
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label htmlFor="company">Company:</label>
                <input type="text" name="company" />
              </div>
              <div>
                <label htmlFor="phone">Phone #:</label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label htmlFor="project-details">Project Details:</label>
                <textarea name="project-details" required />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      );
}

export default ContactForm