import React from "react";
import Nav from "./Nav";
import HeroComponent from "./HeroComponent";

const Main = () => {
  return (
    <>
      <div className="h-screen">
        <Nav />
        <HeroComponent />
      </div>
    </>
  );
};

export default Main;
