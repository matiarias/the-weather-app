import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="absolute top-36 left-0 md:top-1/3 w-10 h-40 bg-black bg-opacity-70 rounded-r-lg flex flex-col justify-center items-center gap-4">
      <a href="https://github.com/matiarias" target="_blank">
        <FaGithub className="text-2xl md:text-3xl text-gray-200 hover:text-green-500" />
      </a>
      <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
        <FaLinkedinIn className="text-2xl md:text-3xl text-gray-200 hover:text-yellow-500" />
      </a>
      <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
        <FaInstagram className="text-2xl md:text-3xl text-gray-200 hover:text-blue-800" />
      </a>
    </div>
  );
};

export default SocialMedia;
