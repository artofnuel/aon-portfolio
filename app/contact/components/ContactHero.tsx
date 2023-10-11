"use client";
import React, { useState } from "react";

type Form = {
  name: string;
  email: string;
  message: string;
};

const ContactHero = () => {
  const [query, setQuery] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });

  // Update inputs value
  const handleParam = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Submit function
  const formSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/e0ddc90f-1d22-4995-9f62-802395e907e9", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };

  return (
    <main className="w-full h-[82vh] p-4 md:p-8 md:px-12">
      <section className="w-full h-full flex flex-col md:flex-row gap-5 md:gap-0">
        <div className="w-full md:w-1/2 bg-bkg p-4 md:p-8 space-y-5 rounded-md md:rounded-r-none">
          <h2 className="text-xl md:text-4xl text-primary">
            Thank you for reaching out!
          </h2>
          <p className="text-lg md:text-2xl text-white">
            Drop a message
            <br />I will reach out to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={formSubmit}
          className="w-full md:w-1/2 bg-primary p-4 md:p-8 flex flex-col justify-center items-center gap-5 rounded-md md:rounded-l-none"
        >
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-xl text-white font-light">
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={query.name}
              onChange={handleParam()}
              className="p-4 bg-bkg text-white rounded-md text-lg font-extralight outline-none"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-xl text-white font-light">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={query.email}
              onChange={handleParam()}
              className="p-4 bg-bkg text-white rounded-md text-lg font-extralight outline-none"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="message" className="text-xl text-white font-light">
              Message:
            </label>
            <input
              type="text"
              name="message"
              required
              placeholder="Message"
              value={query.message}
              onChange={handleParam()}
              className="p-4 bg-bkg text-white rounded-md text-lg font-extralight outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-bkg text-primary text-lg font-medium rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactHero;
