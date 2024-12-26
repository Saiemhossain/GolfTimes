/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-empty */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */

import axios from "axios";
import { useState } from "react";
import  toast, { Toaster } from 'react-hot-toast';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const postContactData = (e) => {
    e.preventDefault();
    console.log(formData);
    const contactData = {
      data: {
        name: formData.name,
        email: formData.email,
        phone:formData.phone,
        message: formData.message,
      },
    };
    axios
      .post(`${import.meta.env.VITE_APP_URL}/api/contacts`, contactData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Form submitted  successfully")
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
    }
      })
      .catch( (error) => {
        toast.error("Something went wrong! please try again")
        console.error(error)
      })
 
  }
  return (
    <>
      <section className="bg-gray-100">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          container
          className=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4" onSubmit={postContactData}>
                <div>
                  <label className="sr-only" for="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-indigo-700 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

