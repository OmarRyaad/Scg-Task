import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginIcon } from "../icons";
import { Menu, X } from "lucide-react"; // lucide-react هو خيار أيقونات جاهزة

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkBase =
    "font-normal text-sm md:text-base leading-none tracking-normal text-center transition-all duration-200 px-2 py-1";

  const activeClass =
    "bg-[#2B1F51] text-white px-4 py-2 rounded-full font-semibold shadow-md";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="font-cairo w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
      {/* Top header bar */}
      <div className="flex justify-between items-center">
        {/* Logo + Lang */}
        <div className="flex items-center">
          <h3 className="font-semibold text-2xl sm:text-[30px] md:text-[40px]">
            Logo
          </h3>
          <div className="hidden sm:flex items-center pl-4 sm:pl-10 text-sm font-normal">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#D9D9D9] rounded-full mr-2" />
            EN
          </div>
        </div>

        {/* Desktop nav + login */}
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <NavLink
              to="/hosting"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive ? activeClass : "hover:text-[#2B1F51] text-gray-700"
                }`
              }
            >
              Hosting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servers"
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive ? activeClass : "hover:text-[#2B1F51] text-gray-700"
                }`
              }
            >
              Servers
            </NavLink>
          </li>
          {[
            "Demos",
            "ProHosting",
            "Domains",
            "Need Help?",
            "Pages",
            "Contact Us",
          ].map((text, idx) => (
            <li key={idx} className={navLinkBase}>
              {text}
            </li>
          ))}

          <li>
            <button className="flex items-center gap-2 text-white bg-[#2B1F51] px-4 py-2 rounded-[10px] hover:brightness-110 transition">
              Client Login
              <LoginIcon />
            </button>
          </li>
        </ul>

        {/* Burger Menu Icon - Mobile Only */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? (
            <X className="w-6 h-6 text-[#2B1F51]" />
          ) : (
            <Menu className="w-6 h-6 text-[#2B1F51]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-white shadow-md p-4 rounded-lg">
          <NavLink
            to="/hosting"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ""}`
            }
          >
            Hosting
          </NavLink>
          <NavLink
            to="/servers"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ""}`
            }
          >
            Servers
          </NavLink>
          {[
            "Demos",
            "ProHosting",
            "Domains",
            "Need Help?",
            "Pages",
            "Contact Us",
          ].map((text, idx) => (
            <span key={idx} className={navLinkBase}>
              {text}
            </span>
          ))}
          <button className="flex items-center gap-2 text-white bg-[#2B1F51] px-4 py-2 rounded-[10px] hover:brightness-110 transition">
            Client Login
            <LoginIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
