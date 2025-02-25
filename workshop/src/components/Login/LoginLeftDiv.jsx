import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginLeftDiv = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  // Animation settings
  const animationSettings = {
    initial: { opacity: 0, x: -50, y: 20 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: (delay) => ({ duration: 0.5, delay }),
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <motion.div
        className="p-6 w-full max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <motion.h1
          className="text-white text-5xl font-bold text-center mb-4"
          {...animationSettings}
          transition={animationSettings.transition(0.1)}
        >
          Login
        </motion.h1>

        <motion.h2
          className="text-white text-sm text-center mb-8"
          {...animationSettings}
          transition={animationSettings.transition(0.2)}
        >
          Please Enter Your Details
        </motion.h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Email ID */}
          <motion.div
            className="mb-8"
            {...animationSettings}
            transition={animationSettings.transition(0.3)}
          >
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full px-4 py-3 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </motion.div>

          {/* Password Field */}
          <motion.div
            className="mb-4"
            {...animationSettings}
            transition={animationSettings.transition(0.4)}
          >
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-black"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </motion.div>

          {/* Submit Button and Sign Up Link */}
          <motion.div
            className="mb-4 flex justify-between items-center"
            {...animationSettings}
            transition={animationSettings.transition(0.5)}
          >
            <div></div>
            <Link to="/signup" className="text-white text-sm hover:underline">
              New User? Sign Up
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-semibold hover:opacity-80 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...animationSettings}
            transition={animationSettings.transition(0.6)}
          >
            Submit
          </motion.button>
        </form>

        {/* OR Divider */}
        <motion.div
          className="flex items-center my-6"
          {...animationSettings}
          transition={animationSettings.transition(0.7)}
        >
          <div className="flex-1 border-t border-dashed border-white"></div>
          <span className="px-2 text-white text-sm">OR</span>
          <div className="flex-1 border-t border-dashed border-white"></div>
        </motion.div>

        {/* Social Login Options */}
        <motion.div
          className="flex justify-center space-x-16 text-white text-md"
          {...animationSettings}
          transition={animationSettings.transition(0.8)}
        >
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

export default LoginLeftDiv;