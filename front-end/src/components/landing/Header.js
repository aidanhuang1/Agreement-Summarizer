import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";
import React from "react";
import Logo from "../img/argonlogowhite.png";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <img src={Logo} className="ml-24" alt="logo"></img>

            <div className="text-gray-200">
              <p color="gray-200" className="text-5xl mt-6">
                Understanding User Agreements, One Sentence at a Time!
              </p>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 text-3xl mt-6 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
