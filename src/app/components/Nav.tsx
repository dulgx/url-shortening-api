import Image from "next/image";
import logoMain from "../../../public/logo.svg";

const Nav = () => {
  return (
    <div className="flex flex-row m-10 mx-32 justify-between">
      <div className="flex">
        <Image src={logoMain} alt="logo" className="mr-10" />
        <ul className="flex flex-row justify-center items-center gap-10 ">
          <li className=" text-zinc-400 font-semibold">Features</li>
          <li className=" text-zinc-400 font-semibold">Pricing</li>
          <li className=" text-zinc-400 font-semibold">Resources</li>
        </ul>
      </div>

      <div className="flex flex-row justify-end items-center gap-10">
        <button className=" text-zinc-400 font-semibold">Login</button>
        <button className="bg-teal-500 text-white p-1.5 px-4 rounded-3xl hover:bg-teal-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
