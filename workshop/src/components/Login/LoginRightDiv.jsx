import React from "react";
import { motion } from "framer-motion";

const LoginRightDiv = () => {
  return (
    <div className="flex-1 md:flex items-center justify-center lg:mt-12">
      <motion.img
        src="/login.png"
        alt="Welcome"
        className="max-w-xs md:max-w-sm lg:max-w-md"
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />
    </div>
  );
};

export default LoginRightDiv;
