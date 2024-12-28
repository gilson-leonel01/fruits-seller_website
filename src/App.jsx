import Hero from "./Hero/Hero";
import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner/Banner2";
import Banner3 from "./Banner/Banner3";
import Footer from "./Footer/Footer";
import { useScroll, motion, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{
          scaleX,
          top: 0,
          left: 0,
          right: 0,
          position: "fixed",
          transformOrigin: "0%",
          height: "10px",
          zIndex: "9999",
        }}
        className="bg-gradient-to-r  from-primary to-secondary   "
      ></motion.div>
      <main className="overflow-x-hidden ">
        <Navbar />
        <Hero />
        <Menu />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
}

export default App;
