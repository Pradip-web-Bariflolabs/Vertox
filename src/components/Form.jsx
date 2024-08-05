import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mob: '',
    company_name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();

    const apiEndpoint = 'http://192.168.1.30:8000/contactus/';

    try {
      const response = await axios.post(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);

      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        mob: '',
        company_name: '',
        message: ''
      });
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request error:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('General error:', error.message);
      }
    }
  };

  return (
    <div className="space-y-3 md:space-y-6 my-4 flex flex-col justify-center items-center sm:max-w-[40rem] md:max-w-[50rem] mx-auto px-3 md:px-6 bg-white rounded-lg shadow-lg py-8">
      <h2 className="font-semibold text-3xl text-gray-800">Connect with us</h2>
      <p className="text-center text-gray-600">
        Share your details for customer assistance, business &amp; partnership
        enquiries. Our team will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="px-2 my-2 md:px-12 w-full flex flex-col justify-center space-y-4">
        <div>
          <input
            className="input border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            className="input border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            className="input border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            type="text"
            name="mob"
            placeholder="Mobile Number *"
            value={formData.mob}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            className="input border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            className="input border border-gray-300 rounded-md py-2 px-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className="bg-sky-500 text-xl text-white rounded-md py-3 px-7 font-semibold mx-auto hover:bg-sky-600 transition duration-300 ease-in-out"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
