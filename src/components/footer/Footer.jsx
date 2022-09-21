import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[50px] bg-gradient-to-r from-gray-500/40 to-gray-900 flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-6">
        <div className="flex gap-2 items-center">
          <h4 className="text-gray-200 text-lg font-bold">
            Creado por Matias Arias
          </h4>
          <span className="text-gray-200 text-base">&copy;2022</span>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/matiarias" target="_blank">
            <FaGithub className="text-4xl md:text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
            <FaLinkedinIn className="text-4xl md:text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
            <FaInstagram className="text-4xl md:text-3xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
