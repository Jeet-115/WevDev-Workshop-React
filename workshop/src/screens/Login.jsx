import React from "react";
import LoginLeftDiv from "../components/Login/LoginLeftDiv";
import LoginRightDiv from "../components/Login/LoginRightDiv";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-[#62C5E5] to-[#B2E2F2] min-h-screen">
      {/* Logo */}
      <Navbar />

      {/* Main container with left and right divs */}
      <main className="flex flex-col lg:flex-row items-center justify-center w-full pt-[150px]">
        {/* Left Div */}
        <LoginLeftDiv />

        {/* Right Div */}
        <LoginRightDiv />
      </main>
    </div>
  );
};

export default Login;