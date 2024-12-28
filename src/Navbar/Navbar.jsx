import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";
import {motion} from "framer-motion"

const Menu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Product",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav>
      <motion.div
      initial = {{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      
      className="container flex justify-between items-center py-4 md:pt-4">
        {/* Logo Section */}
        <div className="logo flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruits</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* Menu Section */}
        <div className="menu hidden md:block  ">
          <ul className="flex items-center gap-6 text-gray-500">
            {Menu.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    className="hover:text-primary font-semibold py-1 px-3 hover:shadow-[0_3px_0_-1px_#ef4444] inline-block "
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <button className="text-2xl duration-200 hover:bg-primary hover:text-white p-2  rounded-full">
              <MdOutlineShoppingCart />
            </button>
          </ul>
        </div>
        {/* {mobile menu section} */}
        <div className="md:hidden">
          <MdMenu className="text-4xl"
          onClick={() => setOpen(!open)}
          />

        </div>
      </motion.div>
      <ResponsiveNavbar open={open}  />
    </nav>

  );
}
