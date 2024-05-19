import React from "react";
import Nav from "./Nav";
import HeroComponent from "./HeroComponent";
import EmailInput from "./EmailInput";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="relative">
        <Nav />
        <HeroComponent />
        <EmailInput />
        <Footer />
      </div>
    </>
  );
};

export default Main;
