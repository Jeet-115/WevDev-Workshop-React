import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Header animation
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Menu fade animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay, // Use specific delay per item
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full bg-white shadow-md backdrop-blur-lg z-50 px-6 py-4"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="text-[#5b4dff] text-2xl font-bold roboto-flex transition-transform duration-300 ease-in-out hover:scale-110"
            variants={itemVariants}
            custom={0.1}
          >
            AllinOne
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold gendy">
          <motion.div variants={itemVariants} custom={0.2}>
            <Link
              to="/"
              className="hover:text-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Home
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} custom={0.4}>
            <Link
              to="/login"
              className="hover:text-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Login
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} custom={0.5}>
            <Link
              to="/signup"
              className="hover:text-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Sign Up
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.div className="md:hidden" variants={itemVariants} custom={0.2}>
          <button
            onClick={handleToggle}
            className="focus:outline-none relative w-10 h-10 flex flex-col justify-center items-center"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              className="w-8 h-[3px] bg-black rounded-md"
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-8 h-[3px] bg-black rounded-md my-[5px]"
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              className="w-8 h-[3px] bg-black rounded-md"
            />
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full bg-white backdrop-blur-md shadow-lg rounded-b-lg md:hidden"
          >
            <nav className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold gendy">
              <motion.div variants={itemVariants} custom={0.2}>
                <Link
                  to="/"
                  className="hover:text-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} custom={0.4}>
                <Link
                  to="/login"
                  className="hover:text-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  Login
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} custom={0.5}>
                <Link
                  to="/signup"
                  className="hover:text-gray-600 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  Sign Up
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
