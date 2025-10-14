import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 space-y-8" style={{ background: 'linear-gradient(to right, #0C233C, #296685, #0C233C)', color: '#F5EDE4' }}>
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center"
        style={{ color: '#F5EDE4' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      {/* Animated Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 rounded-lg shadow-lg space-y-6"
        style={{ backgroundColor: 'rgba(41, 102, 133, 0.8)' }}
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
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: '#0C233C', 
              borderColor: '#296685', 
              color: '#F5EDE4',
              focusRingColor: '#FD8916'
            }}
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
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2"
            style={{ 
              backgroundColor: '#0C233C', 
              borderColor: '#296685', 
              color: '#F5EDE4',
              focusRingColor: '#FD8916'
            }}
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
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 h-40 resize-none"
            style={{ 
              backgroundColor: '#0C233C', 
              borderColor: '#296685', 
              color: '#F5EDE4',
              focusRingColor: '#FD8916'
            }}
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
            className="w-full font-semibold p-4 rounded-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            style={{ 
              backgroundColor: '#FD8916', 
              color: '#F5EDE4' 
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#296685'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FD8916'}
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
}

export default Contact;