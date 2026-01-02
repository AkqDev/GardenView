import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openWhatsApp = () => {
    // Replace 1234567890 with your actual WhatsApp number
    const phoneNumber = '1234567890';
    const message = 'Hi! I saw your portfolio and would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Portfolio images array (you can keep your original imports)
  const portfolioImages = [
    { id: 1, src: portfolio1, className: 'div1 row-span-3' },
    { id: 2, src: portfolio2, className: 'div2 row-span-3' },
    { id: 3, src: portfolio3, className: 'div3 col-span-2 row-span-5' },
    { id: 4, src: portfolio4, className: 'div9 col-span-2 row-span-5 row-start-4' },
    { id: 5, src: portfolio5, className: 'div10 col-start-3 row-start-6 row-span-3' },
    { id: 6, src: portfolio6, className: 'div11 col-start-4 row-start-6 row-span-3' },
  ];

  return (
    <div className="w-full h-auto mx-auto my-20 relative overflow-hidden">
      <div className="text-center mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-[#008151] font-bold font-[poppins]"
        >
          Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl max-w-xl font-semibold font-[poppins] mt-3 mx-auto"
        >
          Our past projects of landscaping work
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex justify-center items-center px-5"
      >
        <div className="parent grid grid-cols-4 gap-4 max-w-[1300px] mx-auto">
          {portfolioImages.map((img) => (
            <motion.div 
              key={img.id}
              variants={itemVariants}
              className={`${img.className} overflow-hidden group rounded-3xl`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
             <img src={img.src} 
                alt={`portfolio${img.id}`} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Get in Touch Button */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate={isHovered ? "hover" : "initial"}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={openWhatsApp}
          className="group relative bg-gradient-to-r from-[#008151] to-[#00a86b] text-white px-10 py-4 rounded-full text-lg font-semibold font-[poppins] shadow-lg overflow-hidden border-2 border-transparent hover:border-white/30 transition-all duration-300"
        >
          {/* Background shine effect */}
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Floating WhatsApp icon */}
          <motion.span 
            animate={floatingAnimation}
            className="absolute -top-3 -right-3 bg-white text-[#008151] p-2 rounded-full shadow-lg z-20"
          >
            <FaWhatsapp size={20} />
          </motion.span>

          {/* Button text with icon */}
          <span className="flex items-center gap-3 relative z-10">
            Get in Touch
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowRight />
            </motion.span>
          </span>

          {/* Ripple effect on click */}
          <motion.span 
            className="absolute inset-0 bg-white/30 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Portfolio;