const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black w-full">
      <div className='grid gap-6 mb-6 mt-[10%] mx-[20%] '>
        <h1 className="font-heading text-3xl py-8">Contact Us</h1>
        <p className="pb-4">Please fill out the form with your project details and we will be in touch</p>

       <form name="Maxum-Contact" action="/success" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="Maxum-Contact" />
          <div className="border-black">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="project-details">Project Details</label>
            <textarea name="project-details" required />
          </div>
          <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 w-[40%]">Send</button>
          </div>
        </form>
      </div>
    </div>
    // <form
    //   name="Maxum-Contact"
    //   action="/success"
    //   method="post"
    //   data-netlify="true"
    //   className="mb-20"
    // >
    //   <input type="hidden" name="form-name" value="Maxum-Contact" />
    //   <div className="grid gap-6 mb-6 mt-[10%] mx-[20%]">
    //     <div>
    //       <label htmlFor="first_name" className="block mb-2">
    //         First name
    //       </label>
    //       <input
    //         type="text"
    //         name="first_name"
    //         className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="last_name" className="block mb-2">
    //         Last name
    //       </label>
    //       <input
    //         type="text"
    //         name="last_name"
    //         className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="company" className="block mb-2">
    //         Company
    //       </label>
    //       <input
    //         type="text"
    //         name="company"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       />
    //     </div>
    //     <div>
    //       <label
    //         htmlFor="phone"
    //         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //       >
    //         Phone Number
    //       </label>
    //       <input
    //         type="tel"
    //         name="phone"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label
    //         htmlFor="website"
    //         className="block mb-2 text-sm font-medium text-gray-900"
    //       >
    //         Email Address
    //       </label>
    //       <input
    //         name="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="project-details">Project Details:</label>
    //       <textarea name="project-details" required />
    //     </div>
    //   </div>
    //   <div className="flex justify-center">
    //     <button
    //       type="submit"
    //       className="justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[30%] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </form>
  );
};

export default ContactForm;
