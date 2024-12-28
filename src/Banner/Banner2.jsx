import React from "react";
import banner2 from "../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/Animation";

export default function Banner2() {
  return (
    <section className=" ">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
    

        {/* {brand info} */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px] ">
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="text-3xl lg:text-6xl font-bold uppercase ">
             Online Fruit Store
            </motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}>
              At Fruitify Store, we make shopping for fresh fruits easy, fast, and convenient with our seamless online platform. Browse our wide selection of fruits, place your order in just a few clicks, and enjoy a hassle-free shopping experience.
            </motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >
              We bring farm-fresh fruits straight to your doorstep with care and speed. Our delivery team ensures your order arrives in perfect condition, maintaining the freshness and quality you deserve.

              Enjoy the ease of healthy living with Fruitify Store freshness delivered to your door! 🚚
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Download App</button>
            </motion.div>
          </div>
        </div>
            {/* {image section} */}
            <div className="flex justify-center items-center">
          <motion.img
          initial={{opacity:0 , x:200,rotate:75}}
          whileInView={{opacity:1 , x:0,rotate:0}}
          transition={{ duration:1, delay:0.2}}
            src={banner2}

            alt={"banner"}
            className="w-[300px] md-max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
}
