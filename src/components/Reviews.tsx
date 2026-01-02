import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';
import review4 from '../assets/review4.jpg';
import { DottedGlowBackground } from '../components/ui/dotted-glow-background';

const Reviews = () => {
  // All reviews combined
  const allReviews = [
    {
      id: 1,
      name: "Sophie Moore",
      role: "Homeowner",
      image: review1,
      rating: 5,
      text: "Transformed our yard into a beautiful outdoor oasis, absolutely stunning",
      featured: true
    },
    {
      id: 2,
      name: "John Carter",
      role: "Property Developer",
      image: review2,
      rating: 5,
      text: "Fantastic landscaping service with remarkable results. Highly recommended!",
      featured: true
    },
    {
      id: 3,
      name: "Matt Cannon",
      role: "Hotel Manager",
      image: review3,
      rating: 5,
      text: "Exceptional service and breathtaking results. Our garden looks amazing!",
      featured: true
    },
    {
      id: 4,
      name: "Lilly Woods",
      role: "Restaurant Owner",
      image: review4,
      rating: 5,
      text: "Highly professional team delivering top-notch landscaping every single time.",
      featured: true
    },
    {
      id: 5,
      name: "Patrick Meyer",
      role: "Event Planner",
      image: review1,
      rating: 5,
      text: "Expert landscapers who deliver incredible results. Our yard is gorgeous!",
      featured: false
    },
    {
      id: 6,
      name: "Kathie Corl",
      role: "Architect",
      image: review2,
      rating: 5,
      text: "Unmatched expertise and dedication to landscaping perfection every time.",
      featured: false
    },
    {
      id: 7,
      name: "Andy Smith",
      role: "Interior Designer",
      image: review3,
      rating: 5,
      text: "Exceeded all our expectations with their landscaping skills and creativity.",
      featured: false
    },
    {
      id: 8,
      name: "Sandy Houston",
      role: "Corporate Executive",
      image: review4,
      rating: 5,
      text: "Impressive transformation of our outdoor space, couldn't be happier!",
      featured: false
    }
  ];

  // Create extended array for seamless scrolling
  const extendedReviews = [...allReviews, ...allReviews, ...allReviews];

  // Horizontal scroll animation
  const scrollAnimation = {
    x: [0, -2800], // Adjusted for all cards
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "linear" as const,
    }
  };

  // Card hover animation
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -8,
      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Floating animation for featured badge
  const badgeVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }
    }
  };

  return (
    <div className="w-full py-24 mx-auto bg-gradient-to-b from-[#11322A] to-[#0A231C] relative overflow-hidden">
      {/* Dotted Glow Background - Simple CSS version */}
      <DottedGlowBackground
        className="absolute inset-0"
        opacity={0.25}
        size={1.2}
        gap={25}
        dotColor="#059669"
        glowColor="#10b981"
        glow={true}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-green-900/5 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-green-800/5 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 1
            }
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section - More engaging */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring" as const,
              stiffness: 200,
              damping: 15 
            }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full shadow-2xl">
                <FaQuoteLeft className="text-white text-3xl" />
              </div>
              <motion.div
                variants={badgeVariants}
                animate="float"
                className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                TRUSTED
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-[poppins] mb-4 leading-tight">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Homeowners</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">Professionals</span>
            </h1>
          </motion.div>
       </motion.div>

        {/* Main Carousel Section */}
        <div className="relative">
          {/* Section Title with gradient */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-900/30 to-emerald-900/30 px-6 py-3 rounded-full border border-green-500/20 backdrop-blur-sm">
              <FaStar className="text-yellow-400 text-lg animate-spin-slow" />
              <h2 className="text-white text-2xl md:text-3xl font-bold font-[poppins]">
                Client Testimonials
              </h2>
              <FaStar className="text-yellow-400 text-lg animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>
            <p className="text-gray-300 mt-4 text-lg">
              See what our clients are saying about their experience
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#11322A] via-[#11322A]/95 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#11322A] via-[#11322A]/95 to-transparent z-10 pointer-events-none"></div>
            
            {/* Glow effect behind carousel */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10 blur-3xl -z-10"></div>

            {/* Main Carousel */}
            <motion.div
              className="flex py-8 cursor-grab active:cursor-grabbing"
              animate={scrollAnimation}
              whileHover={{ animationPlayState: "paused" }}
            >
              {extendedReviews.map((review, index) => (
                <motion.div
                  key={`review-${review.id}-${index}`}
                  whileHover="hover"
                  initial="initial"
                  variants={cardVariants}
                  className="flex-shrink-0 w-[300px] md:w-[340px] mx-3 md:mx-4 relative group"
                >
                  {/* Featured badge */}
                  {review.featured && (
                    <motion.div
                      variants={badgeVariants}
                      animate="float"
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                        <FaStar className="text-xs" />
                        FEATURED REVIEW
                      </div>
                    </motion.div>
                  )}

                  {/* Card */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-7 border border-white/20 shadow-2xl hover:shadow-green-900/40 transition-all duration-300 h-full relative overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Quote icon background */}
                    <div className="absolute top-4 right-4 text-green-400/10 text-6xl md:text-7xl">
                      <FaQuoteLeft />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center mb-4 md:mb-5 relative z-10">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ type: "spring" as const, stiffness: 400 }}
                          >
                            <FaStar className="text-yellow-400 w-5 h-5 md:w-6 md:h-6 mr-1 drop-shadow-lg" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="ml-3 text-green-300 font-bold text-base md:text-lg bg-green-900/30 px-3 py-1 rounded-full">
                        5.0 Rating
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-100 text-base md:text-lg italic mb-6 md:mb-7 leading-relaxed relative z-10 min-h-[120px]">
                      "{review.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" as const }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-400 relative shadow-lg"
                        />
                      </motion.div>
                      <div className="ml-4">
                        <h3 className="text-white text-lg md:text-xl font-bold font-[poppins]">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-green-300 text-sm md:text-base font-medium bg-green-900/30 px-3 py-1 rounded-full">
                            {review.role}
                          </p>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <FaArrowRight />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-400/30 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-400/30 rounded-br-3xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#11322A] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Reviews;