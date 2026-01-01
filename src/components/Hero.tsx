import { useRef, useState } from "react";
import herobg from "../assets/herobg.jpg";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const servicesRef = useRef(null); // for scroll if needed

  // Your WhatsApp number here (replace with yours)
  const whatsappNumber = "923001234567"; // format without + or 0, country code included

  // Scroll to services section
  const handleBrowseServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open WhatsApp chat
  const handleWhatsApp = (message = "") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  // Handle send icon click
  const handleSendClick = () => {
    if (!email) return alert("Please enter your email!");
    handleWhatsApp(`Hello, my email is: ${email}`);
    setEmail(""); // reset input after click
  };

  return (
    <div className="w-full h-screen relative rounded-3xl overflow-hidden font-[Poppins]">

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${herobg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 h-screen grid md:grid-cols-2 gap-6 items-center justify-evenly px-6 lg:px-16 text-white max-w-[1200px] mx-auto">

        {/* LEFT SIDE */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-7xl font-bold mb-6 max-w-2xl">
            Let us bring life to your garden
          </h1>

          <p className="text-lg max-w-2xl mb-8 opacity-90 mx-auto md:mx-0 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-row  gap-4 justify-center md:justify-start">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsApp("Hello! I want to get in touch.")}
              className="bg-gradient-to-r from-emerald-600 to-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl w-50"
            >
              Get in Touch
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBrowseServices}
              className="border-2 border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Browse Services
            </motion.button>

          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-80 shadow-2xl text-black flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-extrabold mb-2 text-center">
            Book your service today
          </h2>

          <p className="text-sm mb-6 text-center opacity-80 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor mattis sit phasellus mollis.
          </p>

          {/* Input with WhatsApp send */}
          <div className="w-150 mx-5 relative mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 pr-14 rounded-full text-black shadow-lg border-2 border-gray-200 focus:outline-none transition"
            />  

            {/* Icon Button */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSendClick}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#008151] hover:bg-emerald-600 transition rounded-full p-3 shadow-md"
            >
              <FiSend className="text-white text-lg" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;