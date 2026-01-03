import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'Home', to: 'home', offset: -100 },
    { name: 'About', to: 'about', offset: -80 },
    { name: 'Services', to: 'services', offset: -80 },
    { name: 'Portfolio', to: 'portfolio', offset: -80 },
    { name: 'Testimonials', to: 'testimonials', offset: -80 },
    { name: 'Contact Us', to: 'contact', offset: -80 }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: <FaFacebook />, name: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: <FaLinkedin />, name: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
    { icon: <FaTwitter />, name: 'Twitter', href: '#', color: 'hover:text-blue-400' }
  ];

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
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const leafVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: [0, 10, -10, 10, 0],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <footer className="relative mt-10 w-full bg-[#11332B] text-white overflow-hidden rounded-t-3xl">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#008151] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      
      {/* Floating leaves decoration */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#008151]/10"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 15}%`
          }}
          animate={floatingAnimation}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          <FaLeaf className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Main footer content */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 py-8 md:py-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <motion.div 
              className="flex items-center mb-4 group cursor-pointer"
              whileHover="hover"
              initial="initial"
            >
              <div className="relative">
                <motion.div
                  variants={leafVariants}
                >
                  <FaLeaf className="w-12 h-12 text-[#008151] mr-3" />
                </motion.div>
                <div className="absolute -inset-2 bg-[#008151]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold font-[poppins] bg-gradient-to-r from-[#008151] to-emerald-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Garden View
              </motion.h1>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 max-w-lg leading-relaxed mb-4 font-[poppins]"
            >
              Transforming outdoor spaces into breathtaking living art. Our expert landscape designers create sustainable, 
              beautiful gardens that blend nature with modern aesthetics.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex items-center text-gray-200"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaHeart className="w-4 h-4 mr-2 text-[#008151]" />
              </motion.div>
              <span className="font-[poppins] font-semibold">Proudly serving the community since 2010</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl font-bold font-[poppins] mb-6 pb-2 border-b-2 border-[#008151]/30 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Quick Links
            </motion.h2>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={1000}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-[#008151] rounded-full mr-2"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    />
                    <span className="hover:text-[#00d084] transition-colors duration-300 font-semibold font-[poppins]">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl font-bold font-[poppins] mb-6 pb-2 border-b-2 border-[#008151]/30 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Connect With Us
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-200 mb-6 font-[poppins]"
            >
              Follow us for daily inspiration, tips, and updates on our latest projects.
            </motion.p>
            <motion.div 
              variants={containerVariants}
              className="flex space-x-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-xl text-[#11332B] ${social.color}`}
                  aria-label={social.name}
                >
                  <motion.span variants={socialIconVariants}>
                    {social.icon}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div 
        className="bg-[#0a241d] py-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Animated underline */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#008151] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <motion.div 
          className="text-gray-400 my-2 px-10 text-sm font-[poppins] text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          &copy; {new Date().getFullYear()} Garden View. All rights reserved | Designed by Akbar Qureshi
        </motion.div>

        {/* Animated pulse effect */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#008151]/50 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Bottom wave decoration */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <motion.path
            d="M0,40 C200,20 400,30 600,20 C800,10 1000,30 1200,20 L1200,40 L0,40 Z"
            fill="#0a241d"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </footer>
  );
};

export default Footer;