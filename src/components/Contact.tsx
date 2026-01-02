import contact from '../assets/contact.jpg'
import { motion } from 'framer-motion'
import { BsWhatsapp, BsEnvelope, BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs'

interface StepItem {
  step?: string;
  title: string;
  description: string;
  whatsappNumber?: string;
  email?: string;
  message?: string;
  icon?: React.ReactNode;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const Contact = () => {
  const steps: StepItem[] = [
    {
      title: "Message us on WhatsApp",
      description: "Get instant response within 3 hours",
      whatsappNumber: "+1234567890",
      message: "Hello, I'd like to discuss a landscape design project!",
    },
    {
      title: "Send us an Email",
      description: "Get detailed response within 24 hours",
      email: "info@example.com",
      message: "Landscape Design Inquiry",
    },
    {
      title: "Follow us on Social Media",
      description: "Stay updated with our latest projects and tips",
      socialMedia: {
        instagram: "https://instagram.com/yourprofile",
        twitter: "https://twitter.com/yourprofile",
        facebook: "https://facebook.com/yourprofile",
        linkedin: "https://linkedin.com/company/yourprofile"
      }
    }
  ]

  const openWhatsApp = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank')
  }

  const openEmail = (email: string, subject: string) => {
    const encodedSubject = encodeURIComponent(subject)
    window.open(`mailto:${email}?subject=${encodedSubject}`, '_blank')
  }

  const socialMediaIcons = [
    { icon: <BsInstagram />, label: "Instagram", url: "https://instagram.com/yourprofile" },
    { icon: <BsTwitter />, label: "Twitter", url: "https://twitter.com/yourprofile" },
    { icon: <BsFacebook />, label: "Facebook", url: "https://facebook.com/yourprofile" },
    { icon: <BsLinkedin />, label: "LinkedIn", url: "https://linkedin.com/company/yourprofile" }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const sidebarVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.5
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(41, 103, 65, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  }

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        type: "spring" as const,
        stiffness: 400
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full h-auto mx-auto my-10 md:my-20 relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-10 px-4">
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl text-[#008151] font-bold font-[poppins]"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-xl font-semibold font-[poppins] mt-2 md:mt-3 mx-auto"
        >
          Get in touch to design a beautiful landscape today
        </motion.p>
      </div>

      {/* Main content container */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4">
        <div className="relative">
          {/* Background image with parallax effect */}
          <motion.div
            variants={imageVariants}
            className="relative rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
          >
            <motion.img
              src={contact}
              alt="Contact background"
              className="w-full h-[450px] md:h-[600px] object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Animated gradient overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
            />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            className="absolute top-1/2 -translate-y-1/2 
                       w-[calc(100%-32px)] max-w-[320px] sm:max-w-[360px] md:max-w-[380px]
                       left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 
                       md:right-8 lg:right-12 
                       bg-white/95 backdrop-blur-md 
                       rounded-xl sm:rounded-2xl 
                       p-4 sm:p-6 md:p-8 
                       shadow-2xl"
            whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + (index * 0.2),
                  ease: "easeOut" as const
                }}
                whileHover={{ x: 5 }}
                className={`mb-4 sm:mb-6 md:mb-8 pb-4 sm:pb-6 md:pb-8 ${
                  index < steps.length - 1 
                    ? 'border-b border-gray-200' 
                    : ''
                }`}
              >
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  {/* Title with typing effect */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.3 }}
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-800 font-[poppins] leading-tight"
                  >
                    {item.title}
                  </motion.h3>
                  
                  {/* Description with fade in */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.3 }}
                    className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-[poppins]"
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* Action Buttons */}
                  {index === 0 && item.whatsappNumber ? (
                    <motion.button
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => openWhatsApp(item.whatsappNumber!, item.message!)}
                      className="mt-3 sm:mt-4 bg-gradient-to-r from-[#296741] to-[#2e7d5a] text-white font-bold font-[poppins] py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base group"
                    >
                      <motion.span
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring" as const }}
                      >
                        <BsWhatsapp className="text-lg sm:text-xl" />
                      </motion.span>
                      <span className="whitespace-nowrap">Chat on WhatsApp</span>
                    </motion.button>
                  ) : index === 1 && item.email ? (
                    <motion.button
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => openEmail(item.email!, item.message!)}
                      className="mt-3 sm:mt-4 bg-gradient-to-r from-[#296741] to-[#2e7d5a] text-white font-bold font-[poppins] py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base group"
                    >
                      <motion.span
                        animate={{ y: 0 }}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring" as const }}
                      >
                        <BsEnvelope className="text-lg sm:text-xl" />
                      </motion.span>
                      <span className="whitespace-nowrap">Send Email</span>
                    </motion.button>
                  ) : index === 2 ? (
                    <div className="mt-3 sm:mt-4">
                      {/* Social Media Icons with staggered animation */}
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 1.8
                            }
                          }
                        }}
                        className="flex gap-3 justify-center md:justify-start"
                      >
                        {socialMediaIcons.map((social, idx) => (
                          <motion.a
                            key={idx}
                            variants={socialIconVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#296741] bg-white p-1.5 sm:p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
                          >
                            <span className="text-xl sm:text-2xl">{social.icon}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact