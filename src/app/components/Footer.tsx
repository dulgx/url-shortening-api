import React from "react";
import Image from "next/image";
import Statistic from "../../assets/images/icon-brand-recognition.svg";
import Record from "../../assets/images/icon-detailed-records.svg";
import Customizable from "../../assets/images/icon-fully-customizable.svg";
import bgBoost from "../../assets/images/bg-boost-desktop.svg";
import logoWhite from "../../../public/logo-white.svg";
import faceBook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className=" px-28 bg-gray-100">
        <div className="flex justify-between flex-col items-center py-20">
          <span className="text-3xl font-bold">Advanced Statistics</span>
          <p className="text-center w-1/2">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex justify-between items-center w-full relative pb-40">
          <div className=" max-w-96 bg-white px-5 pb-5 relative rounded m-5">
            <div className="bg-gray-700 rounded-full relative -top-7 w-14 h-14 justify-center items-center flex">
              <Image src={Statistic} alt="s" className="p-2" />
            </div>

            <span className="text-xl font-bold my-2">Brand Recognition</span>
            <p className="my-2 text-sm">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="max-w-96 bg-white px-5 pb-5 relative rounded top-10 m-5">
            <div className="bg-gray-700 rounded-full relative -top-7  w-14 h-14 justify-center items-center flex">
              <Image src={Record} alt="s" className="p-2" />
            </div>
            <span className="text-xl font-bold my-2">Detailed Records</span>
            <p className="my-2 text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="max-w-96 bg-white px-5 pb-5 relative rounded m-5 top-20">
            <div className="bg-gray-700 rounded-full relative  -top-7 w-14 h-14 justify-center items-center flex">
              <Image src={Customizable} alt="s" className="p-2" />
            </div>

            <span className="text-xl font-bold my-2">Fully Customizable</span>
            <p className="my-2 text-sm">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col bg-gray-700 z-10 w-full h-44 bg-cover bg-center bg-no-repeat relative">
        <span className="text-3xl font-bold text-center text-white m-2">
          Boost your links today
        </span>
        <button className="text-white bg-teal-500 p-2 rounded-3xl w-40 m-2 hover:bg-teal-300">
          Get Started
        </button>
        <Image
          src={bgBoost}
          alt="background"
          layout="fill"
          objectFit="fill"
          className="rounded-lg -z-10"
        />
      </div>
      <div className="h-60 bg-neutral-800 w-full p-14 flex justify-between px-28 lg:p-10 lg:px-14">
        <div>
          <Image src={logoWhite} alt="logoMain" className=" fill-white" />
        </div>
        <div className="flex flex-row justify-start gap-10">
          <div className="text-white list-none mx-10">
            <span className="font-bold text-lg">Features</span>
            <div className="mt-3">
              <li className="text-md font-light text-slate-300">
                Link Shortening
              </li>
              <li className="text-md font-light text-slate-300">
                Branded Links
              </li>
              <li className="text-md font-light text-slate-300">Analytics</li>
            </div>
          </div>
          <div className="text-white list-none mx-10">
            <span className="font-bold text-lg">Resources</span>
            <div className="mt-3">
              <li className="text-md font-light text-slate-300">Blog</li>
              <li className="text-md font-light text-slate-300">Developers</li>
              <li className="text-md font-light text-slate-300">Support</li>
            </div>
          </div>
          <div className="text-white list-none mx-10">
            <span className="font-bold text-lg">Company</span>
            <div className="mt-3">
              <li className="text-md font-light text-slate-300">About</li>
              <li className="text-md font-light text-slate-300">Our Team</li>
              <li className="text-md font-light text-slate-300">Careers</li>
              <li className="text-md font-light text-slate-300">Contact</li>
            </div>
          </div>

          <div className="flex justify-start items-start mx-5 pt-1">
            <Image src={faceBook} alt="facebook" className="h-5 w-5 mx-2" />
            <Image src={twitter} alt="twitter" className="h-5 w-5 mx-2" />
            <Image src={pinterest} alt="pinterest" className="h-5 w-5 mx-2" />
            <Image src={instagram} alt="instagram" className="h-5 w-5 mx-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
