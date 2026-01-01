import { useState } from "react";
import herobg from "../assets/herobg.jpg";
import { FiSend, FiChevronRight } from "react-icons/fi";
import { FaWhatsapp, FaStar, FaCheckCircle, FaLeaf, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "923001234567";

  const handleBrowseServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = (message = "") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleSendClick = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }
    
    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    
    setIsSubmitting(true);
    handleWhatsApp(`Hello, I'd like to book a service. My email is: ${email}`);
    
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Features list with icons - Commented out since it's not used
  // const features = [
  //   { icon: <FaStar />, text: "5-Star Rated Service" },
  //   { icon: <FaCheckCircle />, text: "Free Consultation" },
  //   { icon: <FaLeaf />, text: "Eco-Friendly" },
  //   { icon: <FaPhoneAlt />, text: "24/7 Support" }
  // ];

  return (
    <div className="w-full min-h-screen relative rounded-3xl overflow-hidden font-[Poppins]">
      {/* Animated Background with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2,
          ease: "easeOut"
        }}
      />
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            initial={{ 
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 min-h-screen flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center px-6 lg:px-16 xl:px-24 text-white max-w-[1400px] mx-auto py-12 md:py-0">
        
        {/* LEFT SIDE - Enhanced */}
        <motion.div
          className="text-center md:text-left space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2
          }}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
          >
            <FaLeaf className="text-lg" />
            <span>Transforming Outdoor Spaces Since 2010</span>
          </motion.div>

          {/* Main Heading with Staggered Text */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl  font-bold leading-tight md:leading-tight"
            >
              Let Us Bring{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                Life
              </span>{" "}
              To Your Garden
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg max-w-2xl opacity-90 font-medium mx-auto md:mx-0 text-gray-100"
            >
              Professional landscaping services that transform your outdoor space into a beautiful, sustainable oasis you'll love coming home to.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsApp("Hello! I'd like to discuss a landscaping project.")}
              className="group relative bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <FaWhatsapp className="text-xl" />
                Get Free Quote
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "white",
                color: "black"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBrowseServices}
              className="border-2 border-white py-4 px-8 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 text-lg backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                Browse Services
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-sm opacity-90">4.9/5 Rating</span>
            </div>
            <div className="h-6 w-px bg-white/30" />
            <div className="text-sm opacity-90">
              <span className="font-bold">500+</span> Happy Clients
            </div>
            <div className="h-6 w-px bg-white/30" />
            <div className="text-sm opacity-90">
              <span className="font-bold">24/7</span> Support
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD - Enhanced */}
        <motion.div
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            className="relative bg-gradient-to-br from-white via-white to-emerald-50 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full translate-y-20 -translate-x-20" />
            
            <div className="relative z-10">
              {/* Card Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4"
                >
                  <FaCheckCircle className="text-base" />
                  <span>Limited Time Offer</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3"
                >
                  Book Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">
                    Free Consultation
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-600 text-base md:text-lg max-w-sm mx-auto"
                >
                  Get a personalized landscaping plan and quote. No commitment required.
                </motion.p>
              </div>

              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-6 py-4 pr-16 rounded-full text-gray-800 shadow-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-300 text-lg placeholder-gray-400"
                    disabled={isSubmitting}
                  />

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSendClick}
                    disabled={isSubmitting}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 transition-all duration-300 rounded-full p-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      animate={isSubmitting ? { rotate: 360 } : {}}
                      transition={isSubmitting ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                    >
                      <FiSend className="text-white text-xl" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Additional Info */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100"
                >
                  <span className="inline-flex items-center gap-1">
                    <FaCheckCircle className="text-emerald-500" />
                    We'll respond within 1 hour
                  </span>
                  <br />
                  <span className="text-xs opacity-75">
                    No spam ever. Unsubscribe anytime.
                  </span>
                </motion.p>

                {/* Alternative Contact */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleWhatsApp("Hello! I prefer to chat on WhatsApp.")}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-full font-semibold text-gray-700 hover:shadow-md transition-all duration-300"
                >
                  <FaWhatsapp className="text-emerald-600 text-xl" />
                  Or chat directly on WhatsApp
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 cursor-pointer" 
          onClick={handleBrowseServices}
        >
          <span className="text-white/70 text-sm font-medium">Explore More</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;