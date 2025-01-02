import { useState } from "react"
import logo from './../assets/Logo.png'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

type Props = {}

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="w-full h-full bg-gray-20 p-4 md:px-12 font-dmsans font-semibold">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={logo} alt="logo" className="w-auto h-8 md:h-auto"/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-between p-4 gap-8 cursor-pointer">
              <li className="hover:text-yellow-400">Home</li>
              <li className="hover:text-yellow-400">Benefits</li>
              <li className="hover:text-yellow-400">Our Classes</li>
              <li className="hover:text-yellow-400">Contact Us</li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-between gap-6 h-16 cursor-pointer">
              <li className="hover:text-yellow-400">Sign In</li>
              <button className="bg-yellow-400 h-12 px-4 w-72 rounded-md hover:bg-yellow-500 transition duration-300">
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-20 z-50">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li className="hover:text-yellow-400">Home</li>
              <li className="hover:text-yellow-400">Benefits</li>
              <li className="hover:text-yellow-400">Our Classes</li>
              <li className="hover:text-yellow-400">Contact Us</li>
              <li className="hover:text-yellow-400">Sign In</li>
              <button className="bg-yellow-400 h-12 px-4 w-72 rounded-md hover:bg-yellow-500 transition duration-300">
                Become a Member
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar