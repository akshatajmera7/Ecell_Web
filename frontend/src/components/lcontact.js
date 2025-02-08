import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

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
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSent(false), 5000);
        },
        () => alert("Failed to send the message. Please try again.")
      );
  };

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Feel free to drop a message. We'll get back to you soon!
        </p>
        {isSent && (
          <motion.div
            className="text-green-400 text-center text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully!
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
