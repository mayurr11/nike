import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        {/* Desktop Nav Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-4 shadow-lg lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={toggleMenu} // Optionally close the menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
