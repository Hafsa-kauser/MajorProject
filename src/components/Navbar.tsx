import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/C.png";
import { navItems } from "../constants";
import type { NavItem } from "../constants";
import { motion, LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  //const [hovered, setHovered] = useState<string | null>(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-purple-700/80">
      <div className="container px-4 mx-auto relative ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center h-full"><Link to="/">
            <img className="h-full max-h-12 w-auto mr-2" src={logo} alt="logo" /></Link>
            <Link to="/">
            <span className="text-xl tracking-tight font-bold hover:text-[#47085a] text-white">Cachetron</span></Link>
          </div>

          {/* Desktop menu with Framer Motion hover highlight */}
          <ul className="hidden lg:flex ml-14 space-x-12 relative">
            <LayoutGroup>
              {navItems.map((item: NavItem) => (
                <motion.li
  key={item.label}
  whileHover={{
    y: -3,
    color: "#47085a",
    textShadow: "0px 0px 8px rgba(253,186,116,0.7)"
  }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link to={item.href}>{item.label}</Link>
</motion.li>
))}
            </LayoutGroup>
          </ul>

          {/* Buttons */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <Link 
  to="/Docs" 
  className="py-2 px-3 border rounded-md text-white hover:bg-[#47085a]"
>
  Get Started
</Link>

          
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X color="white" /> : <Menu color="white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item: NavItem) => (
              <li key={item.label} className="py-4">
  <Link to={item.href} className="text-white hover:text-gray-400">
    {item.label}
  </Link>
</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
