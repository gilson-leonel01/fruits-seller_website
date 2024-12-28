import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import plateImage from "../assets/fruit-plate.png";
import leaf from "../assets/leaf.png";
import { FadeRight } from "../utility/Animation";

export default function Hero() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <motion.div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]  relative ">
        {/* Brand Info */}
        <div className=" flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-5 lg-max-w-[400px] capitalize">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl  lg:text-6xl leading-relaxed xl-leading-loose font-averia font-bold"
            >
              Healthy
              <br /> fresh <span className="text-secondary">Fruits</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now for fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat daily for
              good health and mind <strong>Order now</strong> and get 20% off on your first order!
            </motion.p>

            {/* Button */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex     items-center gap-2">
                <IoBagHandleOutline />
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
        {/* Image section */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            delay: 0.4,
            repeatType: "reverse",
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex justify-center items-center"
        >
          <img
            className=" w-[550px] object-cover  drop-shadow"
            src={plateImage}
            alt="hero image"
          />
        </motion.div>
        <div className="absolute top-14  right-1/2   md:top-0  rotate-[40deg]   blur-sm  opacity-80">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 70 }}
            animate={{ opacity: 100, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className=" md:max-w-[300px]   "
            src={leaf}
            alt="leaf image"
          />
        </div>
      </motion.div>
    </section>
  );
}
