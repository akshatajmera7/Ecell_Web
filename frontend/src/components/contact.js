import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jgjg9c9", // Replace with your EmailJS service ID
        "template_esw9wcg", // Replace with your EmailJS template ID
        formData,
        "SM5dFgRcYcADs0HJ5" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => alert("Failed to send the message. Please try again.")
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-ecell-bg text-ecell-text py-12">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center text-ecell-text mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      {/* Container for side-by-side layout */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center">
        {/* Animated Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 p-6 rounded-lg shadow-lg space-y-6 bg-ecell-dark border border-ecell-secondary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-ecell-primary bg-ecell-bg border-ecell-secondary/30 text-ecell-text placeholder-gray-400"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-ecell-primary bg-ecell-bg border-ecell-secondary/30 text-ecell-text placeholder-gray-400"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-ecell-primary h-40 resize-none bg-ecell-bg border-ecell-secondary/30 text-ecell-text placeholder-gray-400"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <button
            type="submit"
            className="w-full font-semibold p-4 rounded-md hover:shadow-lg hover:shadow-ecell-primary/30 transform hover:scale-105 transition duration-300 bg-ecell-primary text-ecell-dark hover:bg-ecell-secondary hover:text-ecell-text"
          >
            Send Message
          </button>
        </motion.div>
        </motion.form>

        {/* Right Column - Startup Connect and Contact Details */}
        <div className="w-full lg:w-1/2 space-y-6 flex flex-col">
          {/* Startup Connect Section */}
          <motion.div
            className="p-6 rounded-lg bg-ecell-dark border border-ecell-secondary/20 text-center flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-ecell-primary">Are You a Startup?</h2>
              <p className="text-base sm:text-lg text-ecell-text">
                If you're a startup and want to connect with E-Cell, click below:
              </p>
              <button
                className="w-full font-semibold px-6 py-3 rounded-md bg-ecell-primary text-ecell-dark hover:bg-ecell-secondary hover:text-ecell-text transition duration-300 transform hover:scale-105"
                onClick={() => navigate('/startup-connect')}
              >
                Connect as a Startup
              </button>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            className="p-6 rounded-lg bg-ecell-dark border border-ecell-secondary/20 flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-ecell-primary mb-4 text-center">CONTACT</h2>
            <div className="space-y-3 text-ecell-text">
              
              <p className="text-sm sm:text-base">
                <span className="block font-semibold">Email:</span>
                <a href="mailto:ecell@hyderabad.bits-pilani.ac.in" className="text-ecell-primary hover:text-ecell-secondary transition">
                  ecell@hyderabad.bits-pilani.ac.in
                </a>
              </p>
              <div className="text-sm sm:text-base">
                <span className="block font-semibold mb-2">Phone:</span>
                <p>Sharad: <a href="tel:+919369844662" className="text-ecell-primary hover:text-ecell-secondary transition">+91 9369844662</a></p>
                <p>Shihab: <a href="tel:+919347270686" className="text-ecell-primary hover:text-ecell-secondary transition">+91 9347270686</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;