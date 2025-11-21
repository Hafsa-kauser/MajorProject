import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-10 lg:mt-10 px-30 py-40 overflow-hidden">
      
      {/* Floating background gradient shapes */}
      <motion.div
  className="absolute top-0 left-1/2 w-[400px] h-[400px] 
  bg-gradient-to-r from-[#47085a] to-[#ffffff] 
  rounded-full opacity-30 blur-3xl -translate-x-1/2"
  animate={{ x: ["-20px", "20px"], y: ["0px", "30px"] }}
  transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
/>

<motion.div
  className="absolute bottom-0 right-1/3 w-[300px] h-[300px] 
  bg-gradient-to-r from-[#ffffff] to-[#47085a] 
  rounded-full opacity-25 blur-2xl"
  animate={{ x: ["0px", "-30px"], y: ["0px", "-20px"] }}
  transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
/>


      {/* Headline */}
      <motion.h1
        className="text-5xl sm:text-7xl lg:text-7xl text-center tracking-wide  bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#47085a] "
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Cache Abstraction Layer
      </motion.h1>

      {/* Subheadline */}
      <motion.span
        className="text-2xl text-center mt-4 bg-white text-transparent bg-clip-text"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        For Developers
      </motion.span>

      {/* Paragraph */}
      <motion.p
        className="text-lg mt-6 text-center text-gray-300 max-w-3xl mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
       ML-powered unified caching abstraction layer that intelligently optimizes your Redis, Memcached, and other backends through real-time predictions.
     </motion.p>
<motion.div

       
         className="mt-8 px-10 py-4 rounded-md border border-white 
         text-white font-semibold shadow-lg 
         hover:bg-[#47085a] backdrop-blur-xl"
         whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.7)" }}
         whileTap={{ scale: 0.95 }}
         transition={{ duration: 0.3 }}
       >

  <Link
    to="/Docs">
   
    Documentation
  </Link>
</motion.div>

      </div>
   
  );
};

export default HeroSection;
