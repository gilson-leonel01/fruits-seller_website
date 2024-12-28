import React from "react";
import apple from "../assets/fruits/apple.png";
import avocado from "../assets/fruits/avocado.png";
import cherry from "../assets/fruits/cherry.png";
import orange from "../assets/fruits/orange.png";
import {motion ,AnimatePresence} from 'framer-motion';
import { FadeLeft } from "../utility/Animation";
const menuData = [
  {
    id: 1,
    title: "Apple",
    image: apple,
    delay: 0.6,
    price: "$1.00",
  },
  {
    id: 2,  
    title: "Avocado",
    image: avocado,
    delay: 0.9,
    price: "$5.00",
  },
  {
    id: 3,
    title: "Cherry",
    image: cherry,
    delay: 1.2,
    price: "$2.00",
  },
  {
    id: 4,
    title: "Orange",
    image: orange,
    delay: 1.5,
    price: "$3.00",
  },
];

export default function Menu() {
  return (
    <section className="">
      <div className="container pt-12 pb-20">
        <motion.h1 
        initial = {{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.5,delay:0.3}}

        className="text-2xl font-bold text-left pb-10 uppercase">
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6">
          <AnimatePresence>
          {menuData.map((item) => (
            <motion.div
            variants={FadeLeft(item.delay)}
            initial="hidden"
            whileInView="visible"
            whileHover={{scale:1.1}}
            key={item.id} className="bg-white px-4 py-2 cursor-pointer shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row items-center justify-around gap-2 rounded-3xl">
              <img src={item.image} alt={item.title} className="w-[60px] mb-4 scale-110 transform -translate-y-6" aria-label={item.title} />
              <div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-lg font-semibold text-secondary">{item.price}</p>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  );
}
