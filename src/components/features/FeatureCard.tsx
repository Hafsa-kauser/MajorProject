import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: IconType;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
  return (
     <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(99, 102, 241, 0.8)", // Indigo glow
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-6 rounded-xl bg-black-900 border-white text-white overflow-hidden"
    >
      {/* Glow border using pseudo-background */}
      <div className="absolute inset-0 rounded-xl border-2 border-white bg-black-900 opacity-30 blur-lg pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Icon size={40} className="mb-4 " />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
