import React from "react";
import SignupLeftDiv from "../components/SignUp/SignupLeftDiv";
import SignupRightDiv from "../components/SignUp/SignupRightDiv";
import LogSignNav from "../components/LogSignNav";

const Signup = () => {
  return (
    <div className="bg-gradient-to-b from-[#62C5E5] to-[#B2E2F2] min-h-screen">
      <LogSignNav />
      <main className="flex flex-col lg:flex-row items-center justify-center w-full pt-[100px]">
        <SignupLeftDiv />
        <SignupRightDiv />
      </main>
    </div>
  );
};

export default Signup;
