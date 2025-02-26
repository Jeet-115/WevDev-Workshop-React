import React from "react";
import LoginLeftDiv from "../components/Login/LoginLeftDiv";
import LoginRightDiv from "../components/Login/LoginRightDiv";
import LogSignNav from "../components/LogSignNav";

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-[#62C5E5] to-[#B2E2F2] min-h-screen">
      {/* Logo */}
      <LogSignNav />

      {/* Main container with left and right divs */}
      <main className="flex flex-col lg:flex-row items-center justify-center w-full pt-[100px]">
        {/* Left Div */}
        <LoginLeftDiv />

        {/* Right Div */}
        <LoginRightDiv />
      </main>
    </div>
  );
};

export default Login;