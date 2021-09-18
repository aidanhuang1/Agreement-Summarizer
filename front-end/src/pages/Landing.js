import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
import React from "react";
import DefaultForm from "components/DefaultForm";

export default function Landing() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>

      <Header />

      <WorkingSection />
      <DefaultForm />
      <DefaultFooter />
      
    </>
  );
}
