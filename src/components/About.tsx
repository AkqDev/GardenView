import about from "../assets/about.jpg";
import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaTools, FaAward, FaClock, FaSeedling, FaHome } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Solutions",
      description: "We use nature-friendly tools, fertilizers, and sustainable methods.",
      delay: 0.1
    },
    {
      icon: <FaHandsHelping />,
      title: "Done With Love & Care",
      description: "Every project is treated like our own garden — with passion and attention to detail.",
      delay: 0.2
    },
    {
      icon: <FaTools />,
      title: "Professional Team",
      description: "Skilled and experienced landscaping specialists with 10+ years expertise.",
      delay: 0.3
    },
    {
      icon: <FaClock />,
      title: "On-Time Completion",
      description: "We respect your time with guaranteed project deadlines.",
      delay: 0.6
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="my-20 md:my-32 w-full font-[poppins] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto px-6 lg:px-16 gap-10 md:gap-16">
        
        {/* LEFT IMAGE - Shows on left for desktop, bottom for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 relative order-2 md:order-1"
        >
          <div className="relative">
            {/* Main Image */}
            <motion.div
              initial={{ borderRadius: "50px" }}
              whileInView={{ borderRadius: "30px" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <motion.img
                src={about}
                alt="About Landscaping Services"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-[200px] border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 text-[#008151] rounded-xl p-2">
                  <FaAward className="text-2xl" />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-800">Certified Experts</div>
                  <div className="text-sm text-gray-600">Licensed & Insured</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 w-20 h-20 border-4 border-emerald-200 rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 -left-6 w-16 h-16 border-4 border-emerald-100 rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT - Shows on right for desktop, top for mobile */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 md:space-y-8 text-center md:text-left w-full md:w-1/2 order-1 md:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#008151] px-4 py-2 rounded-full text-sm font-semibold">
              <FaSeedling className="text-lg" />
              <span>Since 2010</span>
            </div>
            
            <h2 className="font-bold text-2xl md:text-3xl text-black">
              Transforming Outdoor Spaces
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We specialize in designing and maintaining stunning outdoor spaces that enhance 
              your property value and create lasting impressions. From comprehensive lawn care 
              to complete landscape transformations — we combine artistry with professionalism.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-4 md:p-5 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 cursor-pointer group"
              >
                <div className="flex gap-4 items-start">
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className="bg-gradient-to-br from-[#008151] to-emerald-400 text-white rounded-2xl p-3 text-2xl group-hover:shadow-lg transition-all duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h1 className="font-semibold text-lg md:text-xl text-gray-800 group-hover:text-[#008151] transition-colors">
                      {feature.title}
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-gray-200"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gradient-to-br from-emerald-50 to-white rounded-2xl"
              >
                <div className="font-bold text-3xl md:text-4xl text-[#008151]">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;