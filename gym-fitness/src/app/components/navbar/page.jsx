"use client"
import { useState } from "react";
import Image from "next/image";
import logo from '../../../../public/Logo.png'
import { RiMenu3Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Navbar = () => {

  const scrolltoSection =(sectionId)=>{
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior: 'smooth' });
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const router = useRouter();

  const handleBenefits =() =>{
    router.push("/benefits")
    setIsMenuOpen(false);
  }

  const handlehome =() =>{
    router.push("/home")
    setIsMenuOpen(false);
  }
  const handleclasses =() =>{
    router.push("/ourClasses")
    setIsMenuOpen(false);
  }
  const handlecontact =() =>{
    router.push("/contact")
    setIsMenuOpen(false);
  }

  
  return (
    <nav>
      <div className="w-full h-full bg-gray-200 p-4 md:px-12 font-dmsans font-semibold">
        <div className="flex items-center justify-between">
          <div>
            <Image onClick={handlehome} src={logo} alt="logo" className="w-auto h-8 md:h-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-between p-4 gap-8 cursor-pointer">
              <li onClick={() => scrolltoSection("home-section")} className="hover:text-primary-500">Home</li>
              <li onClick={()=>scrolltoSection("benefits-section")} className="hover:text-primary-500">Benefits</li>
              <li onClick={()=>scrolltoSection("classes-section")} className="hover:text-primary-500">Our Classes</li>
              <li onClick={()=>scrolltoSection("contact-section")} className="hover:text-primary-500">Contact Us</li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-between gap-6 h-16 cursor-pointer">
              <button onClick={handlecontact} className="bg-yellow-400 h-12 px-4 w-72 rounded-md hover:bg-yellow-500 transition duration-300">
                Become a Member
              </button>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <RiMenu3Line
              className="bg-yellow-400 rounded-full p-2 font-bold text-4xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full md:hidden absolute top-16 left-0 right-0 bg-gray-200 z-50"
          >
            <ul className="flex flex-col items-center gap-4 py-4 cursor-pointer">
              <li onClick={handlehome} className="hover:text-primary-500">Home</li>
              <li onClick={handleBenefits} className="hover:text-primary-500">Benefits</li>
              <li onClick={handleclasses} className="hover:text-primary-500">Our Classes</li>
              <li onClick={handlecontact} className="hover:text-primary-500">Contact</li>
              <button onClick={handlecontact} className="bg-yellow-400 h-12 px-4 w-72 rounded-md hover:bg-yellow-500 transition duration-300">
                Become a Member
              </button>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;