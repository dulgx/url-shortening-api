import React from "react";
import Nav from "./Nav";
import HeroComponent from "./HeroComponent";
import EmailInput from "./EmailInput";

const Main = () => {
  return (
    <>
      <div className="h-screen">
        <Nav />
        <HeroComponent />
        <EmailInput />
      </div>
    </>
  );
};

export default Main;
