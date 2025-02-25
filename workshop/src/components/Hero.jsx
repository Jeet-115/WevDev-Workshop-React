import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="flex items-center justify-center px-6 md:px-12 lg:px-20 
      w-full bg-cover bg-right md:bg-center bg-no-repeat 
      h-[500px] md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: `url("/bg3.jpeg")`,
      }}
    >
      {/* Content */}
      <div className="text-center text-black pt-[60px] md:pt-0">
        <motion.h1
          variants={textVariants}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="text-xl md:text-5xl font-bold mb-4 roboto-flex"
        >
          Welcome to Our Store
        </motion.h1>
        <motion.p
          variants={textVariants}
          custom={0.7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="text-[14px] md:text-xl mb-6 inter"
        >
          Discover the best products at unbeatable prices
        </motion.p>

        {/* Signup & Login Buttons */}
        <motion.div
          variants={textVariants}
          custom={0.9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="flex justify-center space-x-4"
        >
          <Link
            to="/signup"
            className="bg-[#6a00ff] text-white py-3 px-6 rounded-full text-[16px] transition duration-300 hover:bg-[#9d7cff] inter"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-transparent border-2 border-[#6a00ff] text-[#6a00ff] py-3 px-6 rounded-full text-[16px] transition duration-300 hover:bg-[#6a00ff] hover:text-white inter"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
