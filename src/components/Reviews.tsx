import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';
import review4 from '../assets/review4.jpg';

const Reviews = () => {
  // Left carousel reviews
  const leftReviews = [
    {
      id: 1,
      name: "Sophie Moore",
      role: "Homeowner",
      image: review1,
      rating: 5,
      text: "Transformed our yard into a beautiful outdoor oasis, absolutely stunning",
      delay: 0
    },
    {
      id: 2,
      name: "John Carter",
      role: "Property Developer",
      image: review2,
      rating: 5,
      text: "Fantastic landscaping service with remarkable results. Highly recommended!",
      delay: 0.1
    },
    {
      id: 3,
      name: "Matt Cannon",
      role: "Hotel Manager",
      image: review3,
      rating: 5,
      text: "Exceptional service and breathtaking results. Our garden looks amazing!",
      delay: 0.2
    },
    {
      id: 4,
      name: "Lilly Woods",
      role: "Restaurant Owner",
      image: review4,
      rating: 5,
      text: "Highly professional team delivering top-notch landscaping every single time.",
      delay: 0.3
    }
  ];

  // Right carousel reviews
  const rightReviews = [
    {
      id: 5,
      name: "Patrick Meyer",
      role: "Event Planner",
      image: review1,
      rating: 5,
      text: "Expert landscapers who deliver incredible results. Our yard is gorgeous!",
      delay: 0.4
    },
    {
      id: 6,
      name: "Kathie Corl",
      role: "Architect",
      image: review2,
      rating: 5,
      text: "Unmatched expertise and dedication to landscaping perfection every time.",
      delay: 0.5
    },
    {
      id: 7,
      name: "Andy Smith",
      role: "Interior Designer",
      image: review3,
      rating: 5,
      text: "Exceeded all our expectations with their landscaping skills and creativity.",
      delay: 0.6
    },
    {
      id: 8,
      name: "Sandy Houston",
      role: "Corporate Executive",
      image: review4,
      rating: 5,
      text: "Impressive transformation of our outdoor space, couldn't be happier!",
      delay: 0.7
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Floating animation for continuous movement
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Infinite scroll animation
  const infiniteScrollAnimation = {
    y: [0, -1000],
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="w-full py-20 mx-auto bg-gradient-to-b from-[#11322A] to-[#0A231C] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-900/10 blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-800/10 blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 }
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="bg-green-800/20 p-3 rounded-full">
              <FaQuoteLeft className="text-green-400 text-2xl" />
            </div>
          </motion.div>
          
          <h1 className="text-white text-4xl md:text-5xl font-bold font-[poppins] mb-4">
            Client <span className="text-green-400">Testimonials</span>
          </h1>
          <p className="text-gray-300 text-xl font-[poppins] max-w-2xl mx-auto">
            Hear what our delighted clients have to say about their transformed spaces
          </p>
        </motion.div>

        {/* Carousels Container */}
        <div className="relative flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* Left Carousel */}
          <div className="lg:w-1/2 relative overflow-hidden h-[600px] rounded-3xl">
            <motion.div
              className="absolute w-full"
              animate={infiniteScrollAnimation}
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6"
              >
                {[...leftReviews, ...leftReviews].map((review, index) => (
                  <motion.div
                    key={`${review.id}-${index}`}
                    variants={itemVariants}
                    custom={review.delay}
                    whileHover="hover"
                    initial="initial"
                    variants={cardVariants}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-green-900/30 transition-all duration-300"
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                      <span className="ml-2 text-green-300 font-semibold">5.0</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-100 text-lg italic mb-6 leading-relaxed">
                      "{review.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-green-400 rounded-full blur-sm opacity-50"></div>
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-green-400 relative"
                        />
                      </motion.div>
                      <div className="ml-4">
                        <h3 className="text-white text-xl font-bold font-[poppins]">
                          {review.name}
                        </h3>
                        <p className="text-green-300 text-sm font-medium">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 text-green-400/20 text-6xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <FaQuoteLeft />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Carousel */}
          <div className="lg:w-1/2 relative overflow-hidden h-[600px] rounded-3xl">
            <motion.div
              className="absolute w-full"
              animate={{
                y: [0, -1000],
                transition: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 20 // Offset for continuous feel
                }
              }}
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6"
              >
                {[...rightReviews, ...rightReviews].map((review, index) => (
                  <motion.div
                    key={`${review.id}-${index}`}
                    variants={itemVariants}
                    custom={review.delay}
                    whileHover="hover"
                    initial="initial"
                    variants={cardVariants}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-green-900/30 transition-all duration-300"
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                      <span className="ml-2 text-green-300 font-semibold">5.0</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-100 text-lg italic mb-6 leading-relaxed">
                      "{review.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-green-400 rounded-full blur-sm opacity-50"></div>
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-green-400 relative"
                        />
                      </motion.div>
                      <div className="ml-4">
                        <h3 className="text-white text-xl font-bold font-[poppins]">
                          {review.name}
                        </h3>
                        <p className="text-green-300 text-sm font-medium">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 text-green-400/20 text-6xl"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <FaQuoteLeft />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
</div>

      {/* Gradient overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#11322A] via-transparent to-[#11322A] pointer-events-none"></div>
    </div>
  );
};

export default Reviews;