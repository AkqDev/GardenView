import { useState, useEffect } from 'react';
import design from '../assets/design.jpg';
import planting from '../assets/planting.jpg';
import maintenance from '../assets/maintenance.jpg';
import pond from '../assets/pond.jpg';
import lawn from '../assets/lawn.jpg';
import leaf from '../assets/leaf.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Garden Design",
      description: "Professional landscape design services tailored to your vision. Create your dream outdoor space with expert planning.",
      img: design,
    },
    {
      id: 2,
      title: "Flower Planting",
      description: "Expert planting services for trees, shrubs, and flowers. Seasonal blooms and sustainable planting.",
      img: planting,
    },
    {
      id: 3,
      title: "Garden Maintenance",
      description: "Regular maintenance to keep your landscape looking its best. Pruning, weeding, and care.",
      img: maintenance,
    },
    {
      id: 4,
      title: "Leaf Removal",
      description: "Comprehensive seasonal cleaning including leaf removal, debris cleanup, and preparation.",
      img: leaf,
    },
    {
      id: 5,
      title: "Lawn Mowing",
      description: "Complete lawn maintenance including mowing, fertilizing, and pest control for lush green grass.",
      img: lawn,
    },
    {
      id: 6,
      title: "Pond Maintenance",
      description: "Design and installation of beautiful water features. Create tranquil spaces with flowing water.",
      img: pond,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(servicesData.length / 3);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Get current services to display (3 on desktop, 1 on mobile)
  const getCurrentServices = () => {
    const itemsPerView = isMobile ? 1 : 3;
    const startIndex = currentSlide * itemsPerView;
    return servicesData.slice(startIndex, startIndex + itemsPerView);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#11332B] to-[#0a231d] py-12 md:py-16 px-4 md:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <h1 className="font-[poppins] font-bold text-3xl md:text-4xl text-white mb-4">
            Our <span className="text-emerald-400">Professional</span> Services
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto font-medium font-[poppins] leading-relaxed">
            Transform your outdoor space with our comprehensive gardening and landscaping solutions. 
            From design to maintenance, we bring your vision to life with expertise and care.
          </p>
        </div>

        {/* Services Slider */}
        <div className="relative">
          <div className="flex justify-center gap-6 md:gap-8 mb-8 md:mb-12 px-2">
            {getCurrentServices().map((service) => (
              <div 
                key={service.id} 
                className="overflow-hidden w-full transform transition-all duration-500 hover:scale-[1.02]">
                {/* Image Container */}
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-300 h-auto  object-cover transition-transform duration-700 hover:scale-110" 
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 md:w-10 h-1 bg-emerald-500 rounded-full mr-3"></div>
                    <h2 className="font-[poppins] font-bold text-xl md:text-2xl text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-[poppins] mb-4">
                    {service.description}
                  </p>
                  
        </div>
              </div>
            ))}
          </div>

          {/* Slider Dots - Adjusted for mobile/desktop */}
          <div className="flex justify-center items-center gap-3 mb-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-500 md:w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
        
        {/* Additional Information */}
        <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700/50">
          <h3 className="font-[poppins] font-bold text-xl md:text-2xl text-white mb-3 md:mb-4">
            Why Choose Our Services?
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto font-[poppins] leading-relaxed">
            With over 15 years of experience, our certified professionals provide comprehensive gardening solutions 
            using sustainable practices and premium materials. We offer flexible scheduling, competitive pricing, 
            and a 100% satisfaction guarantee on all our services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-10">
            <div className="text-center p-4 bg-gray-800/30 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 font-[poppins]">15+</div>
              <div className="text-gray-300 text-sm md:text-base font-[poppins]">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-gray-800/30 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 font-[poppins]">500+</div>
              <div className="text-gray-300 text-sm md:text-base font-[poppins]">Happy Clients</div>
            </div>
            <div className="text-center p-4 bg-gray-800/30 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 font-[poppins]">24/7</div>
              <div className="text-gray-300 text-sm md:text-base font-[poppins]">Support Available</div>
            </div>
            <div className="text-center p-4 bg-gray-800/30 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 font-[poppins]">100%</div>
              <div className="text-gray-300 text-sm md:text-base font-[poppins]">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;