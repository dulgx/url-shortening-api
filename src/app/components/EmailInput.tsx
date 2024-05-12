import React from "react";
import Image from "next/image";
import bgShorten from "../../assets/images/bg-shorten-desktop.svg";
import { url } from "inspector";

const EmailInput = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat h-32 m-5 rounded-lg relative bg-gray-700  mx-28">
        <Image
          src={bgShorten}
          alt="background"
          layout="fill"
          objectFit="fill"
          className="z-0 rounded-lg"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center w-full">
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Shorton a link here..."
            className="p-2 rounded-lg  text-black h-12 w-4/5 placeholder:pl-5"
          />
          <button
            type="submit"
            className="m-5 h-12 bg-teal-500 w-32 rounded-lg text-white"
          >
            <span className=" text-white">Shorten it!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailInput;
