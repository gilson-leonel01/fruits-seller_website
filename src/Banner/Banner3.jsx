import React from "react";
import banner3 from "../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../utility/Animation";
import { IoBagHandleOutline } from "react-icons/io5";

const bg_style = {
  backgroundImage: `url(${banner3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Banner() {
  return (
    <section className="container mb-12">
      <div
        style={bg_style}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-20 rounded-3xl "
      >
        {/* {image section} */}
        <div></div>

        {/* {brand info} */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[500px] sm:m-auto ">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-2xl lg:text-6xl font-bold uppercase w-full "
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
            >
              At Fruitify Store, we specialize in bringing you the freshest fruits, handpicked from trusted farms to ensure top quality. Every fruit is carefully selected to guarantee unbeatable taste, vibrant colors, and maximum nutrients. <br /><br />

              <strong>What Makes Our Fruits Special?</strong> <br /><br />
              <ul className="list-disc pl-5 space-y-2">
                <li>Farm-Fresh Quality: Delivered straight from the source to preserve freshness.</li>
                <li>Seasonal Favorites: Enjoy the best fruits of the season, always in peak condition.</li>
                <li>Wide Selection: From classic staples to exotic delights, we’ve got it all.</li>
              </ul>
            </motion.p>

            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex justify-center items-center gap-3">
                <IoBagHandleOutline />
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
