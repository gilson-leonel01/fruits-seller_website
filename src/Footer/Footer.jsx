import React from "react";
import { FaLeaf } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" bg-primary/10 ">
      <div className="container py-12 flex justify-between items-center">
        {/* {footer logo} */}
        <div className="logo flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruits</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* {footer social icons} */}
        <div className="flex items-center justify-between  gap-2 md:gap-4 text-3xl ">
          <CiInstagram className="hover:-translate-y-2 hover:scale-110 hover:text-[#FF0FAD] cursor-pointer text-gray-500  hover:font-semibold transition 1s" />
          <FaFacebook className="hover:-translate-y-2 hover:scale-110 cursor-pointer text-gray-500 hover:text-[#136AFF] hover:font-semibold transition 1s"/>
          <CiYoutube className="hover:-translate-y-2 hover:scale-110 cursor-pointer text-gray-500 hover:text-[#FF0C0F] hover:font-semibold transition 1s"/>
          <FaSquareXTwitter className="hover:-translate-y-2 hover:scale-110 cursor-pointer text-gray-500 hover:text-[#080808] hover:font-semibold transition 1s"/>
        </div>
      </div>
    </footer>
  );
}
