import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const Cta: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-8 py-24 mt-20 mb-20 overflow-hidden">

      {/* Background floating gradient blob */}
      <motion.div
        className="absolute top-0 left-1/2 w-[350px] h-[350px] 
        bg-gradient-to-r from-[#47085a] to-white rounded-full 
        opacity-20 blur-3xl -translate-x-1/2"
        animate={{ x: ["-15px", "15px"], y: ["0px", "20px"] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-1/3 w-[280px] h-[280px] 
        bg-gradient-to-r from-white to-[#47085a] 
        rounded-full opacity-20 blur-2xl"
        animate={{ x: ["0px", "-20px"], y: ["0px", "-15px"] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* CTA Title */}
      <motion.h2
        className="text-4xl sm:text-5xl text-center font-bold 
        bg-clip-text text-transparent bg-gradient-to-r from-white to-[#47085a]"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Ready to Optimize Your Cache?
      </motion.h2>

      {/* CTA Subtitle */}
      <motion.p
        className="text-lg text-gray-300 text-center mt-4 max-w-2xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Boost performance with our ML-powered unified caching layer designed for Redis, Memcached, and modern architectures.
      </motion.p>

      {/* CTA Button */}
      <Link to="/Docs" >
      <motion.a
      
        className="mt-8 px-10 py-4 rounded-md border border-white 
        text-white font-semibold shadow-lg 
        hover:bg-[#47085a] backdrop-blur-xl"
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.7)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Get Started
      </motion.a>
</Link>
    </div>
  );
};

export default Cta;
