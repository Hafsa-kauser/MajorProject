import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full border-t backdrop-blur-lg py-4">
      <div className="container mx-auto text-center text-white text-lg">
        © 2025 
      </div>

      <div className="mt-4 flex justify-center items-center gap-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition"
        >
          <FaGithub className="text-2xl" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
