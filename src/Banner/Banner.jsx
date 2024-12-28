import React from "react";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/Animation";

import banner from "../assets/fruits-splash.png";

export default function Banner() {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* {image section} */}
        <div className="flex justify-center items-center">
          <motion.img
          initial={{opacity:0 , scale:0.5}}
          whileInView={{opacity:1 , scale:1}}
          transition={{type:"spring" , duration:1, stiffness:200 , delay:0.2}}
          viewport={{once:true}}
            src={banner}

            alt={"banner"}
            className="w-[300px] md-max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>

        {/* {brand info} */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px] ">
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="text-3xl lg:text-6xl font-bold uppercase ">
              <div className="logo flex items-center gap-2 text-2xl font-bold uppercase">
                <p className="text-primary">Fruits</p>
                <p className="text-secondary">Store</p>
                <FaLeaf className="text-green-500" />
              </div>
            </motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}>
              Welcome to Fruitify Store, your trusted destination for the freshest, healthiest, and most delicious fruits. We are passionate about providing you with top-quality fruits sourced directly from local farms and trusted suppliers.
              <br /> <br />
              At Fruitify, we believe in the power of nature's goodness. Our mission is to inspire a healthy lifestyle by making fresh fruits accessible and affordable to everyone. Whether you're looking for juicy seasonal favorites or exotic varieties, we've got you covered!
            </motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >
              <strong>Why Choose Us?</strong> <br /><br />
              <ul className="list-disc pl-5 space-y-2">
                <li>Freshness Guaranteed: Handpicked fruits delivered straight to your door.</li>
                <li>Quality & Nutrition: Packed with vitamins for a healthy body and mind.</li>
                <li>Great Deals: Get 20% off on your first order!</li>
                <li>Easy Shopping:Order online anytime, and we’ll take care of the rest.</li>
              </ul>     
                            
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
