"use client";

import React, { useState } from "react";
import Image from "next/image";
import bgShorten from "../../assets/images/bg-shorten-desktop.svg";

const EmailInput = () => {
  const [copy, setCopy] = useState(false);
  const [url, setUrl] = useState("");
  const [shorten, setShorten] = useState("");

  return (
    <>
      <div
        className="relative bg-fixed"
        style={{
          background:
            "linear-gradient(to bottom, rgb(255,255,255) 50%,rgb(243 244 246) 50%, rgb(243 244 246) 50%)",
        }}
      >
        <div className="bg-cover bg-center bg-no-repeat h-32 rounded-lg relative bg-gray-700  mx-28">
          <Image
            src={bgShorten}
            alt="background"
            layout="fill"
            objectFit="fill"
            className="z-0 rounded-lg"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center w-full px-16">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="Shorton a link here..."
              className="p-2 rounded-lg  text-black h-12 w-4/5 placeholder:pl-5"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="m-5 h-12 bg-teal-500 w-40 rounded-lg text-white hover:bg-teal-300"
              onClick={() => setShorten(url)}
            >
              <span className=" text-white font-medium">Shorten it!</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-5">
        <div className="flex flex-row justify-between items-center mt-2 h-12 mx-28 bg-white rounded-lg px-8">
          <span>{url}</span>
          <div>
            <span>Short Link</span>
            <button
              type="submit"
              className="m-5 h-8 bg-teal-500 w-24 rounded-lg text-white hover:bg-teal-300"
            >
              <span className="text-white font-sm">Copy</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailInput;
