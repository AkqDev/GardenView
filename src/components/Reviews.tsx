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
    x: [0, -2400], // Adjusted for smaller cards
    transition: {
      duration: 35,
      repeat: Infinity,
      ease: "linear" as const,
    }
  };

  // Card hover animation
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div id="testimonials" className="w-full py-20 mx-auto bg-gradient-to-b from-[#11322A] to-[#0A231C] relative overflow-hidden rounded-3xl">
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
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-green-800/5 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-900/30 to-emerald-900/30 px-5 py-2 rounded-full border border-green-500/20 backdrop-blur-sm mb-4">
              <h2 className="text-white text-xl md:text-2xl font-bold font-[poppins]">
                Client Testimonials
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-white text-3xl md:text-4xl font-bold font-[poppins] mb-3 leading-tight">
                Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Homeowners</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">Professionals</span>
              </h1>
            </motion.div>
            <p className="text-gray-300 text-base md:text-lg font-[poppins]">
              See what our clients are saying about their experience
            </p>
          </motion.div>
        </motion.div>

        {/* Carousel Container - Improved */}
        <div className="relative max-w-7xl mx-auto">
          {/* Subtle side glow effect when scrolling */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-3/4 bg-gradient-to-r from-green-500/20 to-transparent blur-xl opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-3/4 bg-gradient-to-l from-emerald-500/20 to-transparent blur-xl opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>

          {/* Main Carousel Container with subtle glow */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5">
            {/* Inner glow border */}
            <div className="absolute inset-0 rounded-2xl border border-green-400/10 pointer-events-none"></div>
            
            {/* Main Carousel */}
            <motion.div
              className="flex py-6 cursor-grab active:cursor-grabbing group/slider"
              animate={scrollAnimation}
              whileHover={{ animationPlayState: "paused" }}
            >
              {extendedReviews.map((review, index) => (
                <motion.div
                  key={`review-${review.id}-${index}`}
                  whileHover="hover"
                  initial="initial"
                  variants={cardVariants}
                  className="flex-shrink-0 w-[280px] mx-3 relative group" // Smaller width
                >
                  {/* Card */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl hover:shadow-green-900/30 transition-all duration-300 h-full relative overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-emerald-500/3 group-hover:from-green-500/8 group-hover:to-emerald-500/8 transition-all duration-300"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-3 right-3 text-green-400/10 text-5xl">
                      <FaQuoteLeft />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center mb-3 relative z-10">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className="text-yellow-400 w-4 h-4 md:w-5 md:h-5 mr-1 drop-shadow-lg" 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-green-300 font-semibold text-sm bg-green-900/20 px-2 py-1 rounded-full">
                        5.0
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-100 text-sm md:text-base italic mb-4 leading-relaxed relative z-10 min-h-[80px] line-clamp-3">
                      "{review.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center relative z-10 pt-3 border-t border-white/10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-400 relative shadow-md"
                        />
                      </motion.div>
                      <div className="ml-3">
                        <h3 className="text-white text-sm md:text-base font-bold font-[poppins] leading-tight">
                          {review.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <p className="text-green-300 text-xs md:text-sm font-medium bg-green-900/20 px-2 py-0.5 rounded-full">
                            {review.role}
                          </p>
                          <motion.div
                            whileHover={{ x: 3 }}
                            className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <FaArrowRight className="w-3 h-3" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green-400/20 rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green-400/20 rounded-br-2xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA or indicator */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 text-sm font-[poppins]">
            <span className="text-green-400">Hover</span> to pause • <span className="text-emerald-400">Drag</span> to explore more reviews
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#11322A] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Reviews;