import { useState } from 'react';
import { FaLeaf, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
  ];

  // WhatsApp configuration - REPLACE with your actual number
  const whatsappNumber = "1234567890"; // Replace with your number
  const whatsappMessage = "Hello! I'm interested in your gardening services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-5"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between h-16"
        >
          {/* Left side - Logo & Menu items */}
          <div className="flex items-center space-x-8">
            {/* Logo with animation */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-2 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <FaLeaf className="w-10 h-10 text-[#008151] mr-3" />
                </motion.div>
                <h1 className="text-3xl text-black/800 group-hover:text-[#008151] transition-colors duration-300">
                    Garden View
                </h1>
              </div>
            </motion.div>

            {/* Desktop Navigation Items */}
            <motion.div 
              variants={containerVariants}
              className="hidden md:flex items-center space-x-2"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  variants={itemVariants}
                  href="#"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "rgba(0, 129, 81, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative text-md font-semibold flex items-center px-4 py-2 rounded-full text-lg text-[#008151] transition-all duration-300"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#008151] rounded-full"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Get in Touch button */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:block"
          >
            <motion.button
              onClick={() => window.open(whatsappUrl, '_blank')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 129, 81, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#008151] to-emerald-600 text-white px-6 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-xl">
                Get in Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-[#008151]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            variants={itemVariants}
            className="md:hidden flex items-center"
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-3 rounded-full text-emerald-700 hover:text-white hover:bg-gradient-to-r from-[#008151] to-emerald-600 focus:outline-none transition-all duration-300 shadow-md"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 transform transition-transform duration-300" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile menu with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <motion.div 
              className="px-4 pt-3 pb-6 space-y-2 bg-gradient-to-b from-white via-emerald-50/50 to-white shadow-lg rounded-b-2xl"
              variants={containerVariants}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={mobileItemVariants}
                  href="#"
                  className="flex items-center px-5 py-4 rounded-xl text-base font-medium text-emerald-800 hover:text-white hover:bg-gradient-to-r from-[#008151] to-emerald-600 transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-4 group-hover:bg-white transition-all duration-300"></span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
              <motion.div 
                variants={mobileItemVariants}
                className="pt-4 pb-2 px-3"
              >
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open(whatsappUrl, '_blank');
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#008151] to-emerald-600 text-white px-5 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp
                </motion.button>
                <motion.p 
                  className="text-center text-sm text-emerald-600 mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  We'll respond within minutes!
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp button for mobile (optional) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 md:hidden z-50"
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <FaWhatsapp className="text-2xl" />
        </motion.a>
      </motion.div>

    </motion.nav>
  );
};

export default Navbar;