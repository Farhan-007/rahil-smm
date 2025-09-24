"use client";

import React, { useEffect, useRef, useState } from "react";
import BlurryBackground from "./BlurryBG";

export default function ContactSection() {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  useEffect(() => {
    const form = formRef.current;
    const validateForm = () => {
      let errors = {};
      let isValid = true;

      if (!name) {
        errors.name = "Name is required.";
        isValid = false;
      }

      if (!phone || phone.length < 10) {
        errors.phone = "Valid phone number is required.";
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
        isValid = false;
      }

      if (!message) {
        errors.message = "Message cannot be empty.";
        isValid = false;
      }

      setFormErrors(errors);
      return isValid;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (form) {
        const data = new FormData(form);
        const action = form.action;
        try {
          await fetch(action, {
            method: "POST",
            body: data,
          });
          setSubmitMessage("Your message has been sent successfully!");
        } catch (error) {
          setSubmitMessage("Error sending message. Please try again.");
        } finally {
          setIsLoading(false);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          form.reset();
        }
      }
    };

    form?.addEventListener("submit", handleSubmit);
    return () => form?.removeEventListener("submit", handleSubmit);
  }, [name, phone, email, message]);

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-20 bg-[#00000000]">
      <BlurryBackground />
      <div className="mx-auto flex md:flex-row flex-col w-full items-center justify-between mb-12">
        <h2 className="text-2xl md:text-3xl font-black text-left md:w-1/3 text-[#1B1B1B]">
          Let’s Connect And Elevate Your Brand
        </h2>
        <div className="flex md:flex-row flex-col items-center md:w-1/2 gap-12">
          <span className="arrow flex items-center">
            <span className="block h-[2px] w-[150px] bg-[#ff7300]"></span>
            <span className="block triangle-right"></span>
          </span>
          <p className="text-gray-600">
            Have a project in mind or want to learn more about our services?
            Send us a message.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="Details md:flex hidden flex-col w-1/2 gap-6 text-black">
          <span className="text-lg font-bold max-w-1/2">
            Let's start building your digital success story now
          </span>
          <span>
            <label>Phone</label>
            <p>
              <a href="tel:9691446645">+91 9691446645</a>
            </p>
          </span>
          <span>
            <label>Email</label>
            <p><a href="mailto:rahilkhansstudio@gmail.com">rahilkhansstudio@gmail.com</a></p>
          </span>
          <span className="max-w-1/2">
            <label>Office</label>
            <p>
              nazeerabad, satna (mp), India - 485001
            </p>
          </span>
          <span className="underline">
            <a href="https://maps.app.goo.gl/PWZvs61CdoR27jx46" target="_blank" rel="noopener noreferrer">
              See on Google Map
            </a>
          </span>
        </div>

        <div className="flex w-full md:w-1/2">
          <form
            ref={formRef}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyxLNGMXTNHWlZszwGq9KXWufiB4Ve3FGzFg9bmFH2F8krqXUNeimwZHevUm0IeG7nirA/exec"
            className="w-full mx-auto bg-black text-white p-8 rounded-xl shadow space-y-6"
          >
            {/* <h1 className="text-3xl">Contact</h1> */}
            <div className="grid gap-6">
              <div>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="Name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Your Name"
                    className="w-full border-b border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </label>
              </div>
              <div>
                <label>
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+91-1234567890"
                    className="w-full border-b border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </label>
              </div>
              <div>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="Email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="mail@site.com"
                    className="w-full border-b border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </label>
              </div>
              {/* <div>
                <label>
                  <span>Location</span>
                  <input
                    type="text"
                    name="Location"
                    placeholder="City / State"
                    className="w-full border-b border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div> */}
            </div>
            <div>
              <label>
                <span>Message</span>
                <textarea
                  name="Query"
                  value={message}
                  onChange={handleMessageChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full border-b border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition"
              >
                {isLoading ? "Submitting..." : "Send Message"}
              </button>
              {submitMessage && (
                <p className="text-green-400 mt-4 text-sm">{submitMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
