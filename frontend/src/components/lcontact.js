import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles (celestial effect)
    const generatedParticles = Array.from({ length: 200 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: `hsl(${220 + Math.random() * 40}, ${
        80 + Math.random() * 20
      }%, ${70 + Math.random() * 20}%)`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
    }));
    setParticles(generatedParticles);
  }, []);

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
          setTimeout(() => setIsSent(false), 5000); // Reset success message after 5 seconds
        },
        () => alert("Failed to send the message. Please try again.")
      );
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-slate-950 via-indigo-950 to-black overflow-hidden">
      {/* Particle Effects */}
      <br/>
      <br/>
      <br/>
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              backgroundColor: particle.color,
              animation: `float-particle ${particle.duration}s infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tight animate-gradient-x">
            Connect with Us
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 font-light">
            We’d love to hear from you. Let’s create something amazing together.
          </p>
        </motion.div>

        {/* Success Message */}
        {isSent && (
          <motion.div
            className="text-green-400 text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}

        {/* Celestial Themed Transparent Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-transparent p-8 rounded-lg shadow-xl backdrop-blur-lg bg-opacity-30 mt-12 space-y-6 border-2 border-indigo-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-transparent border-2 border-indigo-600 p-4 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full bg-transparent border-2 border-indigo-600 p-4 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition duration-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full bg-transparent border-2 border-indigo-600 p-4 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none transition duration-300"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold p-4 rounded-md border-2 border-indigo-600 hover:bg-indigo-500 hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Contact;