import React from "react";
import SignupLeftDiv from "../components/SignUp/SignupLeftDiv";
import SignupRightDiv from "../components/SignUp/SignupRightDiv";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div className="bg-gradient-to-b from-[#62C5E5] to-[#B2E2F2] min-h-screen">
      <Navbar />
      <main className="flex flex-col lg:flex-row items-center justify-center w-full mt-14">
        <SignupLeftDiv />
        <SignupRightDiv />
      </main>
    </div>
  );
};

export default Signup;
