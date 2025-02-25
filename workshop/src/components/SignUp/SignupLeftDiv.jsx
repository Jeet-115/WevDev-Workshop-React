import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInLeft = (delay) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay },
});

const SignupLeftDiv = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <motion.div className="p-6 w-full max-w-sm">
        <motion.h1 className="text-white text-5xl font-bold text-center mb-4" {...fadeInLeft(0.1)}>
          Sign Up
        </motion.h1>

        <motion.h2 className="text-white text-sm text-center mb-8" {...fadeInLeft(0.2)}>
          Please Enter Your Details
        </motion.h2>

        <form onSubmit={handleSubmit} noValidate>
          <motion.div className="mb-8" {...fadeInLeft(0.3)}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 rounded-full bg-white text-black border border-gray-300 focus:border-black focus:ring-black"
            />
          </motion.div>

          <motion.div className="mb-8" {...fadeInLeft(0.4)}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 rounded-full bg-white text-black border border-gray-300 focus:border-black focus:ring-black"
            />
          </motion.div>

          <motion.div className="mb-4 relative" {...fadeInLeft(0.5)}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 rounded-full bg-white text-black border border-gray-300 focus:border-black focus:ring-black"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </motion.div>

          <motion.div className="mb-4 flex justify-between items-center" {...fadeInLeft(0.6)}>
            <div></div>
            <Link to="/login" className="text-white text-sm hover:underline">
              Already a User? Login
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-semibold hover:opacity-80 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...fadeInLeft(0.7)}
          >
            Sign Up
          </motion.button>
        </form>

        <motion.div className="flex items-center my-6" {...fadeInLeft(0.8)}>
          <div className="flex-1 border-t border-dashed border-white"></div>
          <span className="px-2 text-white text-sm">OR</span>
          <div className="flex-1 border-t border-dashed border-white"></div>
        </motion.div>

        <motion.div className="flex justify-center space-x-16 text-white text-md" {...fadeInLeft(0.9)}>
          <button className="flex items-center space-x-2 hover:opacity-80 transition-all">
            <img src="/google.png" alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="flex items-center space-x-2 hover:opacity-80 transition-all">
            <img src="/github.png" alt="Github" className="w-5 h-5" />
            <span>Github</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignupLeftDiv;
