import { useState } from "react";
import "./style/index.css";

import { FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-around p-5 h-full z-2">
      <h1 className="text-white text-2xl title">OcttaDev</h1>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white absolute left-10  hamburger"
      >
        {isOpen ? (
          <i></i>
        ) : (
          <i>
            <FaBars size={26} />
          </i>
        )}
      </button>
      <div
        className={isOpen ? "nav-links-mobile text-xl font-bold text-[#00DF5E] border-r-4 border-r-[#00DF5E]" : "nav-links text-white gap-10"}
        onClick={() => setIsOpen(false)}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white absolute left-60 top-5  hamburger"
        >
          <i>
            <FaTimes size={26} />
          </i>
        </button>
        <li>
          <a href="#about" className="hover:border-b-2 hover:border-b-[#00DF5E]">Sobre mim</a>
        </li>
        <li>
          <a href="#projects" className="hover:border-b-2 hover:border-b-[#00DF5E]">Projetos</a>
        </li>
        <li>
          <a href="#services" className="hover:border-b-2 hover:border-b-[#00DF5E]">Serviços</a>
        </li>
        <li>
          <a href="#skills" className="hover:border-b-2 hover:border-b-[#00DF5E]">Minhas Skills</a>
        </li>
      </div>
    </div>
  );
}
export default Header;
